# 🎯 Creatik Designs - Complete Setup & Tutorial Guide

**Last Updated:** 2026-08-30

---

## 📚 सभी Guides एक जगह

| Document | क्या है | कब पढ़ें |
|----------|--------|---------|
| **README.md** | Project का overview | शुरुआत में |
| **QUICK-CHANGE-GUIDE.md** | कहाँ-कहाँ changes करने हैं | Website update करते समय |
| **ASSETS-SETUP-GUIDE.md** | Images/icons कैसे setup करें | Photos लगाते समय |
| **ASSETS-SETUP-GUIDE.html** | HTML format (browser में खोलें) | Visual guide चाहिए तो |

---

## 🚀 Quick Start (5 Minutes में शुरू करें)

### 1️⃣ Files खोलें
```
VS Code में खोलें: C:\Users\sindh\creatik-designs
```

### 2️⃣ Website को देखें
```
index.html को browser में खोलें (Ctrl+O)
या
Live Server extension से run करें
```

### 3️⃣ Changes करने के लिए
```
✏️ VS Code में file edit करें
🔧 Comments देखें (🔧 emoji से शुरू)
💾 Ctrl+S से save करें
🔄 Browser को refresh करें (F5)
```

---

## 🎨 Website Structure

### Pages (कौन से pages हैं)
```
✅ index.html          → Homepage
✅ products.html       → All products listing
✅ about.html          → About company
✅ icon-packs.html     → Icon packs showcase
✅ miniblue.html       → MiniBlue product page (detailed)
✅ support.html        → Contact & support
✅ privacy.html        → Privacy policy
✅ terms.html          → Terms of use
```

### Shared Components (सभी pages में same)
```
🔗 Navbar (Top menu)          - सभी 6 main pages में same
📱 Mobile Menu                 - सभी pages में same
🏢 Footer                      - सभी pages में same
```

---

## 🎨 Styling System (Colors, Fonts, Spacing)

### Main CSS File
```
📁 assets/css/design-system.css
   ↓
   🔧 Colors (--primary, --accent, etc.)
   🔧 Fonts (Inter, Plus Jakarta Sans)
   🔧 Spacing (--space-sm, --space-lg, etc.)
   🔧 Shadows & Gradients
```

### How to Change Colors
```css
/* design-system.css में Line ~57 */

:root {
  --primary: #3b82f6;        /* 🔧 Main color - यहाँ बदलें */
  --accent: #8b5cf6;         /* 🔧 Second color */
  --bg: #0a0e1a;             /* 🔧 Background */
  /* ... और भी colors ... */
}
```

---

## 📧 Emails - कहाँ-कहाँ हैं

### Support Emails (Change करने से पहले सभी जगह update करें)

| Email | Location | Purpose |
|-------|----------|---------|
| `hello@creatikdesigns.com` | support.html line 110 | General support |
| `hello@creatikdesigns.com` | products.html line 120 | Product inquiries |
| `miniblue@creatikdesigns.com` | support.html line 127 | MiniBlue support |
| `notify@creatikdesigns.com` | products.html, icon-packs.html | Newsletter signup |

**⚠️ AGAR EMAIL BADLA TO:**
1. `hello@creatikdesigns.com` को अपने email से बदलें
2. सभी 3 जगहों पर update करें:
   - support.html
   - products.html  
   - QUICK-CHANGE-GUIDE.md
3. Browser में refresh करके check करें

---

## 🔗 Links - कहाँ-कहाँ हैं

### Navigation Links (Menu)
```
सभी 6 main pages में same navbar है:
├── Home           → index.html
├── Products       → products.html
├── Icon Packs     → icon-packs.html
├── About          → about.html
├── Support        → support.html
└── Mobile Menu    → Same structure
```

### Footer Links
```
Products Column:
├── All Products   → products.html
├── Icon Packs     → icon-packs.html
└── MiniBlue       → miniblue.html

Company Column:
├── About          → about.html
└── Support        → support.html

Legal Column:
├── Privacy        → privacy.html
└── Terms          → terms.html
```

---

## 📸 Images & Assets Setup

### Folder Structure (कैसा होना चाहिए)
```
creatik-designs/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/                 ← 🔧 यह बनाना है
│       ├── miniblue/
│       │   ├── mockups/        ← Phone mockups
│       │   │   ├── mockup-home.png (320×640)
│       │   │   ├── mockup-apps.png (320×640)
│       │   │   └── mockup-lock.png (320×640)
│       │   ├── icons/          ← Icon previews
│       │   │   └── icons-grid-preview.png (600×400)
│       │   └── hero/           ← Hero images
│       │       └── miniblue-hero.png
│       └── og-images/          ← Social media
│           └── og-image.png (1200×630)
```

### How to Add Images

**Step 1: Create Folders**
```
Open: C:\Users\sindh\creatik-designs\assets
Create: images → miniblue → mockups, icons, hero
```

**Step 2: Add Your Images**
```
mockup-home.png → 320×640px PNG file
mockup-apps.png → 320×640px PNG file
icons-grid-preview.png → 600×400px PNG file
```

**Step 3: Link in HTML**
```html
<img src="assets/images/miniblue/mockups/mockup-home.png"
     alt="MiniBlue mockup"
     style="width: 100%; border-radius: 2.5rem;">
```

---

## 🔧 Tutorial Comments (🔧 emoji से पहचानें)

### Types of Comments

```html
<!-- 🔧 EDITABLE SECTION -->
<!-- यह section आप बदल सकते हो -->

<!-- ⚠️ CROSS-REFERENCE -->
<!-- ये change और जगहों पर भी करना है -->

<!-- DON'T CHANGE -->
<!-- मत छुएं - structure बिगड़ जाएगी -->
```

### Examples

```html
<!-- 🔧 MAIN SUPPORT EMAIL -->
<!-- ⚠️ YE EMAIL AUR JAGAH BHI HAI:
     products.html line 120
     QUICK-CHANGE-GUIDE.md -->
<a href="mailto:hello@creatikdesigns.com">
  hello@creatikdesigns.com
</a>
```

---

## 🎯 Common Tasks

### Task 1: Website का color बदलना

**File:** `assets/css/design-system.css` (Line ~57)

```css
--primary: #3b82f6;        /* 🔧 नीला → अपना color लगाएं */
--accent: #8b5cf6;         /* 🔧 बैंगनी → change करें */
```

**Then:**
- Ctrl+S से save करें
- Browser refresh करें (F5)
- Website का color बदल जाएगा

---

### Task 2: Company का नाम बदलना

**Files to Update:**
1. index.html - Line ~20 (Navbar)
2. about.html - Line ~20 (Navbar)
3. products.html - Line ~20 (Navbar)
4. icon-packs.html - Line ~20 (Navbar)
5. miniblue.html - Line ~20 (Navbar)
6. support.html - Line ~20 (Navbar)
7. Footer में (सभी files में)

**कैसे करें:**
```
Find & Replace करें (Ctrl+H):
Find:    "Creatik Designs"
Replace: "Your Company Name"
```

---

### Task 3: Support email बदलना

**सभी जगहों पर update करें:**

```
1. support.html           → Line 110, 127
2. products.html          → Line 120, 168
3. QUICK-CHANGE-GUIDE.md  → Reference section
```

**Find & Replace:**
```
Find:    hello@creatikdesigns.com
Replace: your-email@yourcompany.com
```

---

### Task 4: Google Play Link update करना

**miniblue.html में दोनों जगहों पर:**

```html
Line ~89:
<a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID">

Line ~405:
<a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID">
```

**Find & Replace:**
```
Find:    ?id=com.creatikdesigns.miniblue
Replace: ?id=YOUR_ACTUAL_APP_ID
```

---

## 📁 File Guide

### HTML Files (Website की pages)
- `index.html` - Homepage (main page)
- `products.html` - Products listing
- `miniblue.html` - MiniBlue product detail
- `icon-packs.html` - Icon packs showcase
- `about.html` - About company
- `support.html` - Contact & support
- `privacy.html` - Privacy policy
- `terms.html` - Terms of use

### CSS Files (Styling)
- `assets/css/design-system.css` - Main styles & colors
- `assets/css/components.css` - Component styles

### JavaScript Files (Interactions)
- `assets/js/main.js` - All interactions & animations

### Documentation Files
- `README.md` - Project overview
- `QUICK-CHANGE-GUIDE.md` - Quick reference for changes
- `ASSETS-SETUP-GUIDE.md` - Images setup guide
- `ASSETS-SETUP-GUIDE.html` - Visual guide (open in browser)

---

## 🎯 Key Points to Remember

### ✅ DO (करें)
- ✅ Comments पढ़ें (🔧 और ⚠️ emoji देखें)
- ✅ Changes करने से पहले QUICK-CHANGE-GUIDE.md देखें
- ✅ एक बार में एक file में change करें
- ✅ Save करने के बाद browser refresh करें
- ✅ Cross-references check करें
- ✅ Backup रखें (important files copy करें)

### ❌ DON'T (मत करें)
- ❌ CSS class names मत बदलें
- ❌ HTML structure मत तोड़ें
- ❌ JavaScript code मत छुएं (जब तक ज्ञान न हो)
- ❌ Folder structure मत बदलें
- ❌ Filenames का case मत बदलें

---

## 🆘 Problem Solving

### Issue: Images नहीं दिख रहे हैं

**Check करें:**
1. File path सही है? (case-sensitive)
2. Image file correct folder में है?
3. Image file corrupt नहीं है?
4. Browser cache clear करें (Ctrl+Shift+Delete)

### Issue: Colors नहीं बदल रहे हैं

**Check करें:**
1. design-system.css में change किया?
2. Browser refresh किया? (Ctrl+F5 - hard refresh)
3. Syntax सही है? (hex code format)

### Issue: Links काम नहीं कर रहे हैं

**Check करें:**
1. href में path सही है?
2. HTML file exist करती है?
3. Filename correctly spelled है?

---

## 📱 Responsive Design

Website automatically सभी devices पर काम करती है:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px-1024px)
- ✅ Mobile (320px-768px)

**Test करने के लिए:**
1. Browser में F12 दबाएं (Developer Tools)
2. Mobile icon दबाएं (top-left corner)
3. Device चुनें (iPhone, Android, etc.)

---

## 🚀 Deployment (Live करने के लिए)

### Hosting Options
1. **Vercel** - Best for static sites (free)
2. **Netlify** - Easy deployment
3. **GitHub Pages** - Free hosting
4. **Web Host** - Traditional hosting

### Before Going Live
- [ ] सभी images add किए?
- [ ] All emails correct हैं?
- [ ] Links सभी काम कर रहे हैं?
- [ ] Mobile responsive test किया?
- [ ] Lighthouse score check किया?

---

## 💡 Tips & Tricks

### Tip 1: Live Server से test करें
```
VS Code में:
- Live Server extension install करें
- index.html पर right-click
- "Open with Live Server"
- Automatic refresh होगी changes करते समय
```

### Tip 2: VS Code में Find & Replace
```
Ctrl+H = Find & Replace खोलें
सभी files में एक साथ change कर सकते हो
```

### Tip 3: Browser DevTools
```
F12 = Developer Tools खोलें
Elements tab में HTML structure देखें
Console में errors देखें
```

### Tip 4: Comments को ध्यान से पढ़ें
```
🔧 = EDITABLE (बदल सकते हो)
⚠️ = CROSS-REFERENCE (और जगहों पर भी update करो)
```

---

## 📞 Need Help?

### Documentation
- Read the comments in HTML files (🔧 emoji से शुरू)
- Check QUICK-CHANGE-GUIDE.md
- See ASSETS-SETUP-GUIDE.md for images

### Common Issues
1. **Images nahi dikh rahe** → ASSETS-SETUP-GUIDE.md देखें
2. **Color nahi badal raha** → design-system.css check करें
3. **Links nahi kaam kar rahe** → href paths verify करें
4. **Mobile menu nahi kaam kar raha** → main.js check करें

---

## 📋 Final Checklist

Before launching website:

```
✅ Folder Structure
   ✓ assets/images/miniblue/ सभी images के साथ
   ✓ assets/css/ सभी stylesheets
   ✓ assets/js/ सभी scripts

✅ Content
   ✓ Company name updated
   ✓ All emails correct
   ✓ All links working
   ✓ All images showing

✅ Styling
   ✓ Colors applied
   ✓ Fonts loading
   ✓ Responsive on mobile

✅ Functionality
   ✓ Mobile menu working
   ✓ Theme toggle working
   ✓ All buttons clickable
   ✓ Forms working

✅ Performance
   ✓ Images optimized
   ✓ Page loads fast
   ✓ No console errors
```

---

## 🎉 You're All Set!

Ab aap website ko apne hisaab se customize kar sakte ho. 

**Remember:**
- 🔧 Comments padhte raho
- ⚠️ Cross-references check karo
- 📁 Folder structure same rakho
- 💾 Regular backups lo

---

**Happy Designing! 🚀**

Last Updated: Aug 30, 2026
