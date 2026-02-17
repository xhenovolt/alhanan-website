import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const fallbackArabicMap: Record<string, string> = {
  "Home": "الرئيسية",
  "About Us": "من نحن",
  "Academics": "الأكاديميات",
  "Admissions": "القبول",
  "School Life": "حياة المدرسة",
  "Gallery": "المعرض",
  "Location & Contact": "الموقع والاتصال",
  "Apply Now": "قدّم الآن",
  "Contact Us": "اتصل بنا",
  "Send Message": "إرسال الرسالة",
  "Submit": "إرسال",
  "Subscribe": "اشترك",
  "Read More": "اقرأ المزيد",
  "Learn More": "اعرف المزيد",
  "Demo": "عرض تجريبي",
  "Loading...": "جارٍ التحميل...",
  "Online": "متصل",
  "Quick questions:": "أسئلة سريعة:",
  "Ask a question...": "اكتب سؤالًا...",
  "Invoice Verification": "التحقق من الفاتورة",
  "Invoice Verified": "تم التحقق من الفاتورة",
  "Invoice Not Found": "الفاتورة غير موجودة",
  "Need Help?": "هل تحتاج مساعدة؟",
  "Get in Touch": "تواصل معنا",
  "Phone": "الهاتف",
  "Email": "البريد الإلكتروني",
  "Address": "العنوان",
};

function parseArrayJson(raw: string): string[] | null {
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) return null;

  try {
    const parsed = JSON.parse(match[0]);
    return Array.isArray(parsed) ? parsed.map((item) => String(item)) : null;
  } catch {
    return null;
  }
}

async function translateWithGemini(texts: string[]): Promise<string[] | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const client = new GoogleGenAI({ apiKey });
  const prompt = `
Translate the following UI strings from English to Arabic (Modern Standard Arabic).

Rules:
- Keep brand names, URLs, emails, phone numbers, and coordinates unchanged.
- Preserve punctuation and line breaks as much as possible.
- Return JSON only: an array of translated strings in the same order.

Input JSON:
${JSON.stringify(texts)}
`;

  const response = await client.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  const parsed = parseArrayJson(response.text ?? "");
  if (!parsed || parsed.length !== texts.length) return null;
  return parsed;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const texts = Array.isArray(body?.texts) ? body.texts.map((item: unknown) => String(item)) : [];
    const target = body?.target === "ar" ? "ar" : "en";

    if (target !== "ar") {
      return NextResponse.json({ translations: {} });
    }

    if (texts.length === 0) {
      return NextResponse.json({ translations: {} });
    }

    const translated = await translateWithGemini(texts);

    if (!translated) {
      const passthrough = Object.fromEntries(
        texts.map((text) => [text, fallbackArabicMap[text] ?? text])
      );
      return NextResponse.json({ translations: passthrough });
    }

    const mapping = Object.fromEntries(texts.map((text, index) => [text, translated[index] ?? text]));
    return NextResponse.json({ translations: mapping });
  } catch {
    return NextResponse.json({ translations: {} }, { status: 200 });
  }
}
