"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const CACHE_KEY = "translation_cache_ar_v1";
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);
const ATTRS = ["placeholder", "title", "aria-label", "alt"] as const;

type TranslationCache = Record<string, string>;

function safeParseCache(raw: string | null): TranslationCache {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function shouldSkipTextNode(node: Text): boolean {
  const parent = node.parentElement;
  if (!parent) return true;
  if (SKIP_TAGS.has(parent.tagName)) return true;
  if (parent.closest("[data-no-translate='true']")) return true;
  return false;
}

function collectTextNodes(root: ParentNode): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (shouldSkipTextNode(node)) continue;

    const raw = node.textContent ?? "";
    if (!raw.trim()) continue;

    if (!(node as Text & { __i18nOriginal?: string }).__i18nOriginal) {
      (node as Text & { __i18nOriginal?: string }).__i18nOriginal = raw;
    }

    nodes.push(node);
  }

  return nodes;
}

function collectElements(root: ParentNode): Element[] {
  const selector = ATTRS.map((attr) => `[${attr}]`).join(",");
  return Array.from((root as Element | Document).querySelectorAll(selector)).filter(
    (el) => !el.closest("[data-no-translate='true']")
  );
}

function collectMetaElements(): HTMLMetaElement[] {
  return Array.from(
    document.querySelectorAll(
      "meta[name='description'],meta[property^='og:'],meta[name^='twitter:']"
    )
  ) as HTMLMetaElement[];
}

async function requestArabicTranslations(texts: string[]): Promise<TranslationCache> {
  if (texts.length === 0) return {};

  const response = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts, target: "ar" }),
  });

  if (!response.ok) {
    return {};
  }

  const data = (await response.json()) as { translations?: Record<string, string> };
  return data.translations ?? {};
}

export default function DynamicTranslator() {
  const { language } = useLanguage();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cache = safeParseCache(localStorage.getItem(CACHE_KEY));

    const applyEnglish = (root: ParentNode = document.body) => {
      for (const node of collectTextNodes(root)) {
        const original = (node as Text & { __i18nOriginal?: string }).__i18nOriginal;
        if (original) {
          node.textContent = original;
        }
      }

      for (const el of collectElements(root)) {
        for (const attr of ATTRS) {
          const original = el.getAttribute(`data-i18n-original-${attr}`);
          if (original) {
            el.setAttribute(attr, original);
          }
        }
      }

      for (const meta of collectMetaElements()) {
        const original = meta.getAttribute("data-i18n-original-content");
        if (original) {
          meta.content = original;
        }
      }

      const originalTitle = document.documentElement.getAttribute("data-i18n-original-title");
      if (originalTitle) {
        document.title = originalTitle;
      }
    };

    const applyArabic = async (root: ParentNode = document.body) => {
      const textNodes = collectTextNodes(root);
      const needed = new Set<string>();

      for (const node of textNodes) {
        const original = (node as Text & { __i18nOriginal?: string }).__i18nOriginal ?? "";
        if (original.trim() && !cache[original]) {
          needed.add(original);
        }
      }

      const elements = collectElements(root);
      for (const el of elements) {
        for (const attr of ATTRS) {
          const value = el.getAttribute(attr);
          if (!value || !value.trim()) continue;

          const dataAttrName = `data-i18n-original-${attr}`;
          if (!el.getAttribute(dataAttrName)) {
            el.setAttribute(dataAttrName, value);
          }

          const original = el.getAttribute(dataAttrName) ?? value;
          if (!cache[original]) {
            needed.add(original);
          }
        }
      }

      for (const meta of collectMetaElements()) {
        if (!meta.getAttribute("data-i18n-original-content")) {
          meta.setAttribute("data-i18n-original-content", meta.content);
        }
        const original = meta.getAttribute("data-i18n-original-content");
        if (original && !cache[original]) {
          needed.add(original);
        }
      }

      if (!document.documentElement.getAttribute("data-i18n-original-title")) {
        document.documentElement.setAttribute("data-i18n-original-title", document.title);
      }
      const originalTitle = document.documentElement.getAttribute("data-i18n-original-title");
      if (originalTitle && !cache[originalTitle]) {
        needed.add(originalTitle);
      }

      const missing = Array.from(needed);
      for (let i = 0; i < missing.length; i += 30) {
        const chunk = missing.slice(i, i + 30);
        const translated = await requestArabicTranslations(chunk);
        Object.assign(cache, translated);
      }

      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

      for (const node of textNodes) {
        const original = (node as Text & { __i18nOriginal?: string }).__i18nOriginal ?? "";
        if (cache[original]) {
          node.textContent = cache[original];
        }
      }

      for (const el of elements) {
        for (const attr of ATTRS) {
          const original = el.getAttribute(`data-i18n-original-${attr}`);
          if (original && cache[original]) {
            el.setAttribute(attr, cache[original]);
          }
        }
      }

      for (const meta of collectMetaElements()) {
        const original = meta.getAttribute("data-i18n-original-content");
        if (original && cache[original]) {
          meta.content = cache[original];
        }
      }

      if (originalTitle && cache[originalTitle]) {
        document.title = cache[originalTitle];
      }
    };

    const run = async () => {
      if (language === "ar") {
        await applyArabic();
      } else {
        applyEnglish();
      }
    };

    run();

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (language === "ar") {
      let debounce: ReturnType<typeof setTimeout> | null = null;
      observerRef.current = new MutationObserver(() => {
        if (debounce) clearTimeout(debounce);
        debounce = setTimeout(() => {
          applyArabic();
        }, 100);
      });

      observerRef.current.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [language]);

  return null;
}
