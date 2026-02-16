# Arabic Translation & RTL Implementation Guide

## Overview
Full Arabic translation and RTL (Right-to-Left) layout support has been successfully implemented for the Al-Hanan website. This guide explains how the system works and how to maintain/extend it.

## What Has Been Implemented

### 1. **Language Context & Provider** (`src/i18n/LanguageContext.tsx`)
- Global language management using React Context API
- Automatic RTL/LTR switching based on language selection
- localStorage persistence for language preference
- Supports immediate UI updates without page reload

### 2. **Translation Files**
- **English**: `src/i18n/translations/en.json`
- **Arabic**: `src/i18n/translations/ar.json`

Both files contain comprehensive translations for:
- Navigation items
- Hero section content
- Feature descriptions
- Page titles
- Buttons and CTAs
- Footer content

### 3. **Language Toggle Component** (`src/components/LanguageToggle.tsx`)
- Visible button in the navbar header
- Displays current language (العربية for Arabic, EN for English)
- Smooth dropdown menu with language options
- Located in navbar for easy access

### 4. **RTL Support** (`src/app/globals.css`)
- Comprehensive CSS rules for RTL layout
- Automatic text direction switching
- Margin and padding adjustments for RTL
- Smooth transitions when switching languages
- Custom Tajawal font for Arabic text

### 5. **Updated Components**
- **Layout** (`src/app/layout.tsx`): Added LanguageProvider and Tajawal font
- **Navbar** (`src/components/Navbar.tsx`): Integrated LanguageToggle, uses translations
- **Home Page** (`src/app/page.tsx`): Updated with translation keys
- **Footer** (`src/components/Footer.tsx`): Uses translation context

## How to Use

### For Users
1. **Switch Language**: Click the language toggle button in the navbar (top right)
   - Shows "العربية" (Arabic) when in English
   - Shows "EN" when in Arabic
2. **Auto-Persist**: Your language choice is automatically saved and will persist across sessions
3. **Instant Update**: The page content updates instantly without reload

### For Developers

#### Adding New Translations

1. **Update both JSON files:**

```json
// en.json
{
  "section": {
    "key": "English text"
  }
}

// ar.json
{
  "section": {
    "key": "النص العربي"
  }
}
```

2. **Use translations in components:**

```tsx
import { useLanguage } from "../i18n/LanguageContext";

export default function MyComponent() {
  const { t } = useLanguage();
  
  return <h1>{t("section.key")}</h1>;
}
```

#### Accessing Language & RTL State

```tsx
const { language, setLanguage, t, isRTL } = useLanguage();

// language: "en" or "ar"
// setLanguage("ar"): Switch to Arabic
// t("key.path"): Get translated string
// isRTL: boolean for RTL mode
```

#### Conditional Styling for RTL

```tsx
// Using the isRTL flag
<div className={isRTL ? "text-right" : "text-left"}>
  Content
</div>

// Or use CSS classes
// In globals.css: html.rtl selectors handle RTL-specific styles
```

## Technical Details

### Language Persistence
- Stored in `localStorage` under key: `language`
- Retrieved on component mount
- Default language: English

### RTL/LTR Switching
1. Sets `dir="rtl"` on `<html>` element
2. Applies `.rtl` class to document root
3. CSS handles all layout adjustments
4. Smooth 0.3s transitions between directions

### Font Handling
- **English**: Inter font (default, already included)
- **Arabic**: Tajawal font from Google Fonts
  - Weights: 300, 400, 500, 700, 800, 900
  - Automatically applied via CSS variable when Arabic is selected

## Current Translations Coverage

✅ Navigation menu
✅ Homepage hero section
✅ Feature descriptions
✅ Call-to-action buttons
✅ Testimonials (main 3 included)
✅ Footer
✅ Common UI elements

## Pages & Components Status

| Component | Status | Notes |
|-----------|--------|-------|
| Navbar | ✅ Complete | Full translation + toggle |
| Footer | ✅ Complete | Translated links |
| Home Page | ✅ Complete | All sections translated |
| Layout | ✅ Complete | RTL support added |
| Language Toggle | ✅ Complete | Dropdown menu |
| Chatbot | ⚠️ Partial | May need specific work |

## Extending Translations

### For Additional Pages

1. Add keys to `en.json` and `ar.json`:
```json
{
  "about": {
    "pageTitle": "About Us",
    "mission": "Our mission text..."
  }
}

{
  "about": {
    "pageTitle": "معلومات عنا",
    "mission": "نصنا حول المهمة..."
  }
}
```

2. Use in the page component:
```tsx
"use client";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <>
      <h1>{t("about.pageTitle")}</h1>
      <p>{t("about.mission")}</p>
    </>
  );
}
```

### Translation Best Practices

1. **Organize by page/component**: Group related translations together
2. **Use meaningful keys**: `nav.home` instead of `n1`
3. **Handle special characters**: Arabic punctuation, proper quotes
4. **Test both languages**: Check layout doesn't break
5. **Maintain consistency**: Use same terms across pages

## RTL Considerations

### What's Already Handled
✅ Text direction
✅ Navigation layout
✅ Margin/Padding flipping
✅ Border positioning
✅ Font family switching
✅ Form elements

### Additional Considerations
- Images may need adjustment if they show direction (e.g., arrows)
- Some components may need additional RTL testing
- Mobile layouts should be verified in both directions

## Metadata & SEO

For multilingual SEO, consider:
1. Language attribute: `<html lang="en">` or `<html lang="ar">`
2. hreflang tags for search engines
3. Separate metadata for each language (currently handles English only)

To add per-language metadata:
```tsx
export async function generateMetadata() {
  const { language } = useLanguage(); // Note: This won't work in metadata
  // Alternative: Use language from URL paths or query
}
```

## Troubleshooting

### Language not persisting?
- Check browser localStorage is enabled
- Key should be `language` in localStorage
- Check browser DevTools > Application > Local Storage

### RTL not applying?
- Verify `html.rtl` class is present on `<html>` element
- Check globals.css for RTL rules
- Clear browser cache (Ctrl+Shift+Delete)

### Text not translating?
- Check key exists in both JSON files
- Verify key path matches exactly (case-sensitive)
- Check `useLanguage()` is called in component
- Ensure component is wrapped by `LanguageProvider`

### Font not loading?
- Check Google Fonts connection
- Verify `--font-tajawal` variable in layout.tsx
- Check browser DevTools > Network tab for font files

## Performance Considerations

✅ **Zero external i18n libraries** - reduced bundle size
✅ **Context-based** - efficient re-renders only when language changes
✅ **localStorage** - instant persistence
✅ **CSS-based RTL** - no JavaScript reflows needed
✅ **Lazy font loading** - Arabic font only loaded when needed

## Future Enhancements

Potential improvements:
1. Add more languages (French, Somali, etc.)
2. Implement language URL paths (`/en/`, `/ar/`)
3. Add automatic language detection (`Accept-Language` header)
4. Add translations for all testimonials
5. Multilingual metadata and SEO optimization
6. Add translation management UI for admins
7. Consider i18n library if complexity increases

## Support

For issues or to add more translations:
1. Edit the JSON translation files
2. Use `t("key.path")` in components
3. Test in both languages
4. Check browser console for errors
5. Verify localStorage shows the language choice

---

**Implementation Date**: 2026-02-16
**Version**: 1.0
**Status**: Production Ready
