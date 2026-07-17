# 🎨 Assets Documentation

Folder ini berisi semua assets (images, icons, fonts) untuk portfolio Dudul.

## 📁 Folder Structure

```
assets/
└── logo.png          # Logo/Profile image (47.4 KB)
    ├── Used in navbar (top-left)
    ├── Used in hero section (profile image)
    └── Used as favicon (browser tab)
```

## 🖼️ Logo.png

**File**: `logo.png`  
**Size**: 47.4 KB  
**Dimensions**: 800x800 px (square format)  
**Format**: PNG with transparency  
**Colors**: Earth tones (Gold, Brown, Green, Off-white)  

### Logo Details
- Letter "D" centered in circular design
- Warm color palette (yellow/gold #D4A574, brown #8B7355, green #6B8E23)
- Professional and modern appearance
- Works well on both light and dark backgrounds

### Usage

The logo is currently used in:
1. **Navbar Logo** - Top-left corner (45x45px)
2. **Profile Image** - Hero section (200x200px)
3. **Favicon** - Browser tab icon

### How to Replace Logo

To use a different logo:

```html
<!-- In index.html -->
<!-- Option 1: Replace this file -->
<!-- Just replace assets/logo.png with a new logo.png -->

<!-- Option 2: Use different filename -->
<img src="assets/your-new-logo.png" alt="Dudul Logo">
```

### Logo Guidelines

If creating a new logo, ensure:
- ✅ Square format (1:1 aspect ratio)
- ✅ PNG format with transparency
- ✅ At least 800x800px dimensions
- ✅ Clear at small sizes (45x45px for navbar)
- ✅ Works on dark backgrounds (for navbar)
- ✅ Professional appearance

### Recommended Logo Tools

Create or edit logos with:
- Figma: https://figma.com (Free, Professional)
- Canva: https://canva.com (Easy, Templates)
- Adobe Express: https://express.adobe.com (Free, Quality)
- Photoshop/Illustrator: Professional grade
- Inkscape: Free vector editor

---

## 📝 How to Add More Assets

### Adding Images

```
assets/
├── logo.png           # Main logo
├── images/
│   ├── project1.png
│   ├── project2.png
│   └── profile-bg.jpg
└── icons/
    ├── custom-icon1.svg
    └── custom-icon2.svg
```

### Reference in HTML

```html
<!-- Images -->
<img src="assets/images/project1.png" alt="Project 1">

<!-- SVG Icons -->
<img src="assets/icons/custom-icon.svg" alt="Icon">

<!-- CSS Background -->
<div style="background: url('assets/images/bg.jpg')"></div>
```

### Optimize Images

Before adding large images:

1. **Resize**: Use appropriate dimensions
2. **Compress**: Use TinyPNG.com or similar
3. **Format**:
   - PNG: For images with transparency
   - JPG: For photos
   - SVG: For icons/logos
4. **Size**: Keep under 100KB each

### Image Best Practices

- Use descriptive filenames: `project-name-screenshot.png`
- Add alt text for accessibility
- Compress to reduce file size
- Use appropriate formats
- Test at different resolutions

---

## 🎯 Logo Usage Examples

### Current Navbar Logo (45x45px)
```html
<img src="assets/logo.png" alt="Dudul Logo" class="navbar-logo">
```

### Current Profile Image (200x200px)
```html
<img src="assets/logo.png" alt="Dudul" class="profile-img">
```

### As Favicon (16x16px, 32x32px)
```html
<link rel="icon" type="image/png" href="assets/logo.png">
```

### Different Sizes
```html
<!-- Small (45px) -->
<img src="assets/logo.png" alt="Logo" width="45" height="45">

<!-- Medium (100px) -->
<img src="assets/logo.png" alt="Logo" width="100" height="100">

<!-- Large (200px) -->
<img src="assets/logo.png" alt="Logo" width="200" height="200">
```

---

## 📊 Asset Size Summary

| Asset | Size | Location | Usage |
|-------|------|----------|-------|
| logo.png | 47.4 KB | assets/ | Navbar & Profile |

**Total Assets Size**: 47.4 KB

---

## 🔄 Future Asset Additions

Planned assets to add:
- [ ] Project screenshots/previews
- [ ] Background images
- [ ] Custom SVG icons
- [ ] Social media icons (custom)
- [ ] PDF resume/CV

---

## ⚙️ Asset Configuration

### Image Lazy Loading (Optional)
```html
<img src="assets/logo.png" alt="Logo" loading="lazy">
```

### Responsive Images (Optional)
```html
<picture>
  <source media="(max-width: 600px)" srcset="assets/logo-small.png">
  <img src="assets/logo.png" alt="Logo">
</picture>
```

### WebP Format (Optional)
```html
<picture>
  <source srcset="assets/logo.webp" type="image/webp">
  <img src="assets/logo.png" alt="Logo">
</picture>
```

---

## 📞 Support

For asset-related questions:
- Check this documentation
- Review IMAGE guidelines above
- Consult logo best practices
- Use recommended tools

---

**Version**: 1.0  
**Last Updated**: 2024-01-16  
**Maintained by**: Dudul
