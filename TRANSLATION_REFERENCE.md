# Arabic Translation Quick Reference

## Using the Translation System

### Basic Usage in React Components

```tsx
import { useLanguage } from "../i18n/LanguageContext";

export default function MyComponent() {
  const { t, language, isRTL } = useLanguage();
  
  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>Current: {language === 'en' ? 'English' : 'Arabic'}</p>
    </div>
  );
}
```

## Available Translation Keys

### Navigation (`nav`)
```
t("nav.home")                 // Home / الرئيسية
t("nav.about")                // About Us / من نحن
t("nav.academics")            // Academics / البرامج الأكاديمية
t("nav.quranMemorization")    // Qur'an Memorization / حفظ القرآن الكريم
t("nav.islamicStudies")       // Islamic Studies / الدراسات الإسلامية
t("nav.primaryEducation")     // Primary Education / التعليم الابتدائي
t("nav.admissions")           // Admissions / القبول والتسجيل
t("nav.schoolLife")           // School Life / حياة المدرسة
t("nav.gallery")              // Gallery / المعرض
t("nav.location")             // Location & Contact / الموقع والاتصال
t("nav.applyNow")             // Apply Now / تقديم الطلب
```

### Common UI (`common`)
```
t("common.language")          // Language / اللغة
t("common.english")           // English / الإنجليزية
t("common.arabic")            // Arabic / العربية
```

### Hero Section (`hero`)
```
t("hero.tagline")             // Tagline text
t("hero.heading")             // Main heading
t("hero.description")         // Description text
t("hero.ctaButton")           // Primary CTA button
t("hero.ctaSecondary")        // Secondary CTA button
```

### Features (`features`)
```
t("features.quranMemorization.title")
t("features.quranMemorization.description")

t("features.islamicExcellence.title")
t("features.islamicExcellence.description")

t("features.holisticDevelopment.title")
t("features.holisticDevelopment.description")

t("features.academicMastery.title")
t("features.academicMastery.description")
```

### Testimonials (`testimonials`)
```
t("testimonials.heading")     // What Parents Say

t("testimonials.aminaHassan.name")
t("testimonials.aminaHassan.role")
t("testimonials.aminaHassan.text")

t("testimonials.drMuhammad.name")
t("testimonials.drMuhammad.role")
t("testimonials.drMuhammad.text")

t("testimonials.zainab.name")
t("testimonials.zainab.role")
t("testimonials.zainab.text")
```

### About Page (`about`)
```
t("about.pageTitle")          // About Al Hanan Education Centre
t("about.pageDescription")    // Learn about our mission...
t("about.sectionTitle")       // About Al Hanan
t("about.missionTitle")       // Our Mission
t("about.missionText")        // Mission text
t("about.visionTitle")        // Our Vision
t("about.visionText")         // Vision text
```

### Academics (`academics`)
```
t("academics.pageTitle")      // Academic Programs
t("academics.pageDescription")
t("academics.sectionTitle")   // Academic Excellence
t("academics.quranProgram")   // Qur'an Memorization Program
t("academics.islamicStudiesProgram")
t("academics.primaryEducationProgram")
```

### Admissions (`admissions`)
```
t("admissions.pageTitle")     // Admissions
t("admissions.pageDescription")
t("admissions.heading")       // Apply to Al Hanan
t("admissions.description")   // Begin your journey...
t("admissions.applyButton")   // Submit Application
```

### Contact & Footer (`contact`, `footer`)
```
t("contact.pageTitle")        // Contact Us
t("contact.heading")          // Get in Touch
t("contact.phone")
t("contact.email")
t("contact.address")

t("footer.about")             // About Al Hanan
t("footer.description")
t("footer.quickLinks")        // Quick Links
t("footer.programs")          // Programs
t("footer.contact")           // Contact
t("footer.copyright")         // © 2024 Al Hanan...
t("footer.privacyPolicy")     // Privacy Policy
t("footer.termsOfService")    // Terms of Service
```

### Other Pages
```
t("schoolLife.pageTitle")
t("schoolLife.heading")
t("schoolLife.description")

t("gallery.pageTitle")
t("gallery.heading")

t("caseStudies.pageTitle")
t("faq.pageTitle")
t("blog.pageTitle")
t("pricing.pageTitle")
```

## RTL Styling Examples

### Using isRTL Flag
```tsx
const { isRTL } = useLanguage();

// Conditional styling
className={isRTL ? "ml-4" : "mr-4"}

// Or use CSS directly
className="ltr:ml-4 rtl:mr-4"
```

### CSS Classes for RTL
```css
/* In globals.css, these are automatically handled: */
html.rtl .ml-2 { margin-right: 0.5rem; margin-left: 0; }
html.rtl .text-left { text-align: right; }
html.rtl .border-l-2 { border-right: 2px; border-left: none; }
/* etc. */
```

## Common Patterns

### Dynamic Content with Fallback
```tsx
const { t } = useLanguage();

// If translation doesn't exist, returns the key itself
const text = t("section.missingKey") // returns "section.missingKey"
```

### Button Text
```tsx
<button onClick={() => setLanguage('ar')}>
  {t("common.arabic")}
</button>
```

### Page Titles
```tsx
<head>
  <title>{t("about.pageTitle")}</title>
</head>
```

## Adding New Translations

### Step 1: Add to en.json
```json
{
  "newSection": {
    "newKey": "English text here"
  }
}
```

### Step 2: Add to ar.json
```json
{
  "newSection": {
    "newKey": "نص عربي هنا"
  }
}
```

### Step 3: Use in Component
```tsx
const text = t("newSection.newKey");
```

## Language Context Functions

```tsx
const {
  language,      // Current language: "en" or "ar"
  setLanguage,   // Function to change language
  t,            // Translation function
  isRTL         // Boolean: true if RTL (Arabic)
} = useLanguage();
```

## Switching Languages Programmatically

```tsx
// Switch to Arabic
const { setLanguage } = useLanguage();
setLanguage('ar');

// Switch to English
setLanguage('en');
```

## localStorage Access

```tsx
// Check current language
const lang = localStorage.getItem('language'); // "en" or "ar"

// Set language manually (not recommended, use setLanguage instead)
localStorage.setItem('language', 'ar');
```

## HTML/CSS RTL Indicators

```tsx
// Check in JavaScript
const isRTL = document.documentElement.dir === 'rtl';
const hasRTLClass = document.documentElement.classList.contains('rtl');

// In CSS
html.rtl { /* RTL-specific styles */ }
html.ltr { /* LTR-specific styles */ }
```

---

**Tips:**
- Always use nested keys like `section.subsection.key` for organized translations
- Keep English and Arabic files in sync
- Test layout in both languages before deploying
- Use meaningful key names for better maintainability
