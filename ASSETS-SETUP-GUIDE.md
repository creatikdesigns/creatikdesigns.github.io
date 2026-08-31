# 📱 Creatik Designs - Assets & Images Setup Guide

**MiniBlue Icon Pack के लिए Complete Setup Guide**

---

## 🎯 Quick Overview

यह guide बताता है कि:
- ✅ Website पर कहाँ photos रखने हैं
- ✅ Icons कहाँ store करें
- ✅ Mockup images कहाँ डालें
- ✅ सभी assets की folder structure
- ✅ HTML में images कैसे link करें

---

## 📁 Folder Structure (Directory Layout)

```
creatik-designs/
│
├── assets/                          ← सभी images/icons यहाँ
│   ├── css/                         (पहले से है)
│   │   ├── design-system.css
│   │   └── components.css
│   ├── js/                          (पहले से है)
│   │   └── main.js
│   │
│   ├── images/                      ← 🔧 यह बनाना है
│   │   ├── miniblue/                ← MiniBlue सभी images
│   │   │   ├── mockups/             ← Phone के mockup photos
│   │   │   │   ├── mockup-home.png
│   │   │   │   ├── mockup-apps.png
│   │   │   │   └── mockup-lock.png
│   │   │   │
│   │   │   ├── icons/               ← Icon pack के sample icons
│   │   │   │   ├── sample-1.png
│   │   │   │   ├── sample-2.png
│   │   │   │   └── sample-icons-grid.png
│   │   │   │
│   │   │   └── hero/                ← Homepage के लिए
│   │   │       └── miniblue-hero.png
│   │   │
│   │   ├── products/                ← अगर और products हों
│   │   │   └── product-1.png
│   │   │
│   │   └── og-images/               ← Social media के लिए
│   │       └── og-image.png
│   │
│   └── fonts/                       (optional - अगर custom fonts चाहिए)
│
├── index.html                       (HTML files)
├── products.html
├── miniblue.html
├── ...
│
└── README.md
```

---

## 🔧 Step-by-Step: MiniBlue Mockup Images Setup

### Step 1: Folders बनाएं
Windows में, `creatik-designs` folder खोलें और यह folders बनाएं:

```
assets/
├── images/
│   └── miniblue/
│       ├── mockups/
│       ├── icons/
│       └── hero/
```

**कैसे बनाएं:**
1. Windows Explorer में जाएं
2. `C:\Users\sindh\creatik-designs\assets` खोलें
3. Right-click → New Folder → `images` नाम दें
4. `images` में जाएं
5. फिर से New Folder → `miniblue` नाम दें
6. `miniblue` में अंदर तीन folders बनाएं:
   - `mockups`
   - `icons`
   - `hero`

---

### Step 2: MiniBlue Mockup Images तैयार करें

**कहाँ से mockup images ले सकते हो:**
- Figma templates
- mockup.design
- placeit.net
- या खुद बना सकते हो

**Image Specifications:**

| Type | Filename | Size | Format | Purpose |
|------|----------|------|--------|---------|
| Home Screen | `mockup-home.png` | 320x640px | PNG | Homepage hero section |
| Apps List | `mockup-apps.png` | 320x640px | PNG | Products page |
| Lock Screen | `mockup-lock.png` | 320x640px | PNG | Icon-packs page |

**महत्वपूर्ण:**
- ✅ Background transparent हो (PNG format)
- ✅ Size 320x640px रखें (smartphone aspect ratio)
- ✅ Quality high हो (72dpi minimum)
- ✅ File size छोटा हो (<500KB)

---

### Step 3: Icons के Sample Images

**Icon grid image बनाएं** जो website पर दिखेगी:

```
- Filename: icons-grid-preview.png
- Size: 600x400px
- Content: 20-30 MiniBlue icons का grid
- Format: PNG with transparent background
```

**कैसे बनाएं:**
1. MiniBlue से 20-30 icons निकालें
2. Figma/Photoshop में grid layout बनाएं
3. 600x400px में export करें
4. `assets/images/miniblue/icons/` में रखें

---

## 💻 HTML में Images कैसे Link करें

### miniblue.html में Mockup Image Add करना

**Location 1: Hero Section (Line 89 के पास)**

```html
<!-- MOCKUP IMAGE - MiniBlue product showcase -->
<div style="width: 100%; max-width: 320px; margin: 0 auto;">
  <img src="assets/images/miniblue/mockups/mockup-home.png" 
       alt="MiniBlue icon pack mockup on Android home screen"
       style="width: 100%; border-radius: 2.5rem; box-shadow: var(--shadow-2xl);">
</div>
```

**Location 2: Features Section (अगर हो)**

```html
<!-- ICONS PREVIEW GRID -->
<img src="assets/images/miniblue/icons/icons-grid-preview.png" 
     alt="MiniBlue icon pack preview showing 30+ sample icons"
     style="width: 100%; max-width: 600px; border-radius: var(--radius-xl); margin: var(--space-lg) 0;">
```

---

## 📸 Website के अलग-अलग Pages में Images

### index.html (Homepage)

```html
<!-- MiniBlue Featured Product Section (Line ~410) -->
<div class="device-mockup">
  <img src="assets/images/miniblue/mockups/mockup-home.png" 
       alt="MiniBlue icon pack preview"
       style="width: 100%; max-width: 320px; border-radius: 2.5rem;">
</div>
```

### icon-packs.html

```html
<!-- MiniBlue Card में -->
<img src="assets/images/miniblue/icons/icons-grid-preview.png" 
     alt="MiniBlue - 1550+ carefully crafted icons"
     style="width: 100%; border-radius: var(--radius-lg);">
```

### products.html

```html
<!-- Product Card में -->
<img src="assets/images/miniblue/mockups/mockup-apps.png" 
     alt="MiniBlue app screen showing icon pack"
     style="width: 80px; height: 160px; border-radius: var(--radius-lg);">
```

---

## 🎨 Social Media Images (OG Images)

**Homepage में meta tag (Line ~14):**

```html
<meta property="og:image" 
      content="https://creatikdesigns.com/assets/images/og-images/og-image.png">
```

**Image specs:**
- Size: 1200x630px
- Format: PNG or JPG
- File: `assets/images/og-images/og-image.png`

---

## 📋 Complete File Checklist

**MiniBlue के लिए जरूरी images:**

```
✅ assets/images/miniblue/mockups/
   ├── mockup-home.png           (320x640px)
   ├── mockup-apps.png           (320x640px)
   └── mockup-lock.png           (320x640px)

✅ assets/images/miniblue/icons/
   └── icons-grid-preview.png    (600x400px)

✅ assets/images/og-images/
   └── og-image.png              (1200x630px)
```

---

## 🔗 HTML में सभी Images के Links

### Step-by-Step: अपनी images को connect करना

**Step 1: Copy करें**
- अपनी mockup image को `assets/images/miniblue/mockups/` में रखें
- Icons grid को `assets/images/miniblue/icons/` में रखें

**Step 2: HTML में add करें**

```html
<!-- 🔧 MINIBLUE MOCKUP -->
<!-- File location: assets/images/miniblue/mockups/mockup-home.png -->
<img src="assets/images/miniblue/mockups/mockup-home.png" 
     alt="MiniBlue icon pack on Android"
     style="width: 100%; max-width: 320px; border-radius: 2.5rem; box-shadow: var(--shadow-2xl);">
```

**Step 3: Alt text हमेशा भरें**
```html
alt="MiniBlue icon pack mockup"  ← यह important है
```

---

## 🎯 कौन सी images कहाँ दिखेंगी?

### Homepage (index.html)
```
MiniBlue Featured Section
    ↓
🖼️ Mockup image दिखेगी (mockup-home.png)
```

### Products Page (products.html)
```
MiniBlue Product Card
    ↓
🖼️ Icon grid दिखेगी (icons-grid-preview.png)
```

### Icon Packs Page (icon-packs.html)
```
MiniBlue Icon Pack Showcase
    ↓
🖼️ Mockup image दिखेगी (mockup-home.png)
    ↓
🖼️ Icons grid दिखेगी (icons-grid-preview.png)
```

### MiniBlue Page (miniblue.html)
```
Hero Section
    ↓
🖼️ Large mockup image (mockup-home.png)
    ↓
Features Grid
    ↓
🖼️ Icons preview (icons-grid-preview.png)
```

---

## ⚠️ Common Mistakes से बचें

| ❌ गलत | ✅ सही |
|--------|--------|
| `src="mockup.png"` | `src="assets/images/miniblue/mockups/mockup-home.png"` |
| Images `C:\Pictures\` में | Images `assets/images/` folder में |
| JPG files (large size) | PNG files (optimized) |
| Image 1920x1080px | Image 320x640px (mobile size) |
| `alt=""` खाली | `alt="MiniBlue mockup"` descriptive |

---

## 🚀 Quick Setup Checklist

- [ ] `assets/images/miniblue/mockups/` folder बनाया
- [ ] `assets/images/miniblue/icons/` folder बनाया
- [ ] `assets/images/og-images/` folder बनाया
- [ ] mockup-home.png file डाली (320x640px)
- [ ] icons-grid-preview.png file डाली (600x400px)
- [ ] og-image.png file डाली (1200x630px)
- [ ] miniblue.html में `<img>` tags add किए
- [ ] index.html में mockup image linked किया
- [ ] icon-packs.html में icons grid linked किया
- [ ] सभी `alt` attributes filled हैं

---

## 📞 अगर Images नहीं दिख रहे हैं?

**Check करें:**

1. **File path सही है?**
   ```
   ✅ assets/images/miniblue/mockups/mockup-home.png
   ❌ assets/mockup-home.png
   ```

2. **Folder structure सही है?**
   ```
   Windows Explorer में देखें:
   C:\Users\sindh\creatik-designs\assets\images\miniblue\mockups\
   ```

3. **Filename सही है (case-sensitive)?**
   ```
   ✅ mockup-home.png
   ❌ Mockup-home.PNG (case different)
   ```

4. **HTML path सही है?**
   ```html
   ✅ src="assets/images/miniblue/mockups/mockup-home.png"
   ❌ src="../assets/images/..." (wrong relative path)
   ```

5. **Image file corrupt नहीं है?**
   - Folder में जाकर देखें कि image खुल रही है या नहीं

---

## 🎨 Image Optimization Tips

**Website के लिए images optimize करें:**

1. **Size कम करें:**
   - TinyPNG.com से compress करें
   - लेकिन quality खराब न हो

2. **Format सही रखें:**
   - Mockups: PNG (transparent background)
   - Photos: JPG (छोटा size)
   - Icons: PNG (best quality)

3. **Dimensions:**
   - Mockup: 320x640px
   - Grid: 600x400px
   - OG Image: 1200x630px

---

## 📝 Additional Notes

### अगर भविष्य में और products add करने हों:

```
assets/images/
├── miniblue/           (पहले से है)
├── product-2/          ← नया product
│   ├── mockups/
│   ├── icons/
│   └── hero/
└── product-3/          ← अगला product
    ├── mockups/
    └── ...
```

### अगर Lazy loading चाहिए (fast loading के लिए):

```html
<img src="assets/images/miniblue/mockups/mockup-home.png" 
     alt="MiniBlue mockup"
     loading="lazy"
     style="width: 100%; border-radius: 2.5rem;">
```

---

## ✅ Final Summary

| Task | File Path | Size | Format |
|------|-----------|------|--------|
| MiniBlue Home Mockup | `assets/images/miniblue/mockups/mockup-home.png` | 320x640 | PNG |
| MiniBlue Apps Mockup | `assets/images/miniblue/mockups/mockup-apps.png` | 320x640 | PNG |
| Icons Grid Preview | `assets/images/miniblue/icons/icons-grid-preview.png` | 600x400 | PNG |
| Social Media Image | `assets/images/og-images/og-image.png` | 1200x630 | PNG |

---

**Happy designing! 🎨**

Agar koi confusion ho to QUICK-CHANGE-GUIDE.md aur comments in HTML files dekho.
