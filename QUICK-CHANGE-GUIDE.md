# 🎯 Creatik Designs - Quick Change Guide

Ye guide batayega ki website me kaha par kya changes kar sakte ho.

---

## 📧 EMAILS & CONTACT INFO

### Kahan find karein:
- **support.html** (lines 83-106): Email addresses hain

### Kaise change karein:
```html
<a href="mailto:hello@creatikdesigns.com">hello@creatikdesigns.com</a>
```
Mein `hello@creatikdesigns.com` ko apna email se badlein.

---

## 🖼️ IMAGES

### Social Media Image (OG Image):
- **File:** index.html
- **Location:** Line 14
```html
<meta property="og:image" content="https://creatikdesigns.com/og-image.png">
```
Apni image ka URL daal dein.

### Logo:
- **index.html** line 109: Hero section me 'C' letter
- **design-system.css**: `.logo-mark` class me

---

## 🔗 LINKS

### Menu Links:
- **index.html** lines 42-47: Desktop menu
- **index.html** lines 74-80: Mobile menu
- Har jagah `<a href="page.html">Text</a>` format hai

### Footer Links:
- **index.html** lines 413-436: Footer me 4 columns hain
- Har column me links change kar sakte ho

---

## 📝 TEXT CONTENT

### Homepage:
- **Title:** index.html line 10
- **Description:** index.html line 11
- **Hero Heading:** index.html lines 113-116
- **Hero Description:** index.html lines 117-119

### Products Page:
- products.html me products ki details

### MiniBlue Page:
- miniblue.html me product-specific content

---

## 🎨 COLORS

### Primary Color (Nila):
File: `assets/css/design-system.css`
```css
--primary: #3b82f6;  /* Ye change karein */
```

### Dark/Light Mode:
- Auto-detect karta hai system preference se
- Theme toggle button automatic kaam karta hai

---

## 📱 GOOGLE PLAY STORE LINKS

### MiniBlue Store Link:
- **miniblue.html** line 88
- **miniblue.html** line 400

```html
<a href="https://play.google.com/store/apps/details?id=com.creatikdesigns.miniblue">
```

---

## 🔧 KEY FILES

| File | Purpose |
|------|---------|
| index.html | Homepage |
| products.html | Products listing |
| miniblue.html | MiniBlue product page |
| icon-packs.html | Icon packs page |
| support.html | Contact page |
| about.html | About page |
| design-system.css | Main colors, fonts, spacing |
| components.css | UI components styling |
| main.js | Animations, interactions |

---

## ⚠️ JO MAT BADLEIN

- Navigation ka structure
- CSS class names
- JavaScript functions ka logic
- Form/button ka HTML structure

---

## 💡 TIPS

1. **Test locally:** Files open karke check karein
2. **Backup:** Pehle original files ka backup rakh lein
3. **Browser inspect:** Chrome me right-click > Inspect se elements dekhein

---

Made with ❤️ for Creatik Designs