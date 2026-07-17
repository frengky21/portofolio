# 🛠️ LOCAL SETUP GUIDE

Panduan lengkap untuk setup dan run portfolio Dudul di komputer lokal Anda.

## ✅ Prerequisites (Requirement Minimal)

Anda hanya membutuhkan:
- **Komputer** dengan Windows, Mac, atau Linux
- **Browser modern** (Chrome, Firefox, Safari, Edge)
- **Text Editor** (VS Code, Sublime, Notepad++, dll)
- **Git** (optional, tapi recommended)

**Optional tapi recommended:**
- Git installed
- Live Server extension untuk VS Code

---

## 📥 Option 1: Download ZIP (Paling Mudah)

### Step 1: Download Repository
1. Pergi ke: https://github.com/agent_dudul/portfolio-dudul
2. Klik tombol **Code** (hijau)
3. Klik **Download ZIP**
4. Extract ZIP ke folder yang Anda inginkan

### Step 2: Buka di Browser
1. Navigate ke folder yang sudah di-extract
2. Double-click file `index.html`
3. Browser akan otomatis membuka portfolio

**Selesai!** Portfolio sudah bisa dilihat.

---

## 🐙 Option 2: Git Clone (Recommended)

### Step 1: Install Git
- **Windows**: https://git-scm.com/download/win
- **Mac**: https://git-scm.com/download/mac
- **Linux**: `sudo apt-get install git`

### Step 2: Clone Repository
```bash
# Buka terminal/command prompt
# Navigate ke folder mana saja

# Clone repository
git clone https://github.com/agent_dudul/portfolio-dudul.git

# Navigate ke folder project
cd portfolio-dudul
```

### Step 3: Buka di Browser
**Option A: Simple**
```bash
# Buka file di browser
# Windows: start index.html
# Mac: open index.html
# Linux: xdg-open index.html
```

**Option B: Dengan Live Server**
```bash
# Jika punya Python 3
python -m http.server 8000

# Atau gunakan Node.js
npx http-server

# Buka di browser: http://localhost:8000
```

---

## 💻 Option 3: VS Code + Live Server (Best)

### Step 1: Install VS Code
- Download dari https://code.visualstudio.com/

### Step 2: Install Live Server Extension
1. Buka VS Code
2. Pergi ke Extensions (Ctrl+Shift+X)
3. Cari "Live Server"
4. Install oleh Ritwick Dey

### Step 3: Open Project
1. File → Open Folder
2. Pilih folder `portfolio-dudul`
3. Right-click pada `index.html`
4. Klik "Open with Live Server"

**Benefit:**
- ✅ Auto-reload saat edit file
- ✅ Live preview di browser
- ✅ Hot module replacement
- ✅ Local server dengan IP address

---

## 📝 Edit Portfolio Anda

### Mengubah Informasi Personal

#### 1. Nama, Subtitle, Description
File: `index.html`
```html
<!-- Ganti bagian ini -->
<h1 class="hero-title">
    <span class="gradient-text">Halo, Saya Dudul</span>
</h1>
<p class="hero-subtitle">AI Developer • Web Developer • Networking Enthusiast</p>
<p class="hero-description">
    Mahasiswa ITB Stikom Bali yang passionate tentang...
</p>
```

#### 2. Profile Image
```html
<!-- Ganti src dengan image Anda -->
<img src="YOUR_IMAGE_URL" alt="Dudul" class="profile-img">
```

**Cara mendapatkan image URL:**
- Upload ke imgur.com
- Copy link
- Paste di src

**Atau gunakan data URL untuk logo SVG** (sudah ada contohnya)

#### 3. Social Media Links
```html
<!-- Instagram -->
<a href="https://instagram.com/agent_dudul" target="_blank">

<!-- TikTok -->
<a href="https://tiktok.com/@agent_dudul" target="_blank">

<!-- Email -->
<a href="mailto:dudul@example.com">
```

#### 4. About Section
```html
<h3>Dudul</h3>
<p>Saya adalah seorang mahasiswa dari...</p>
<p>Saya aktif dalam organisasi...</p>
```

#### 5. Skills Section
Edit setiap skill card:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-brain"></i>  <!-- Ganti icon -->
    </div>
    <h3>AI Development</h3>  <!-- Ganti judul -->
    <p>Deskripsi skill...</p>  <!-- Ganti deskripsi -->
    <div class="skill-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

#### 6. Projects Section
Edit setiap project card:
```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Project description...</p>
    <div class="project-tags">
        <span class="tag">Technology1</span>
        <span class="tag">Technology2</span>
    </div>
</div>
```

#### 7. Contact Section
```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fab fa-instagram"></i>
    </div>
    <h4>Instagram</h4>
    <p>@agent_dudul</p>
    <a href="https://instagram.com/agent_dudul" target="_blank">
```

---

## 🎨 Customize Warna

### Edit Color Scheme
File: `styles.css`

```css
:root {
    --primary-color: #667eea;      /* Blue */
    --secondary-color: #764ba2;    /* Purple */
    --accent-color: #f093fb;       /* Pink */
    --text-dark: #1a1a2e;          /* Dark text */
    --text-light: #e0e0e0;         /* Light text */
    --bg-dark: #0f0f1e;            /* Dark background */
    --bg-light: #16213e;           /* Light background */
    --border-color: #2d2d44;       /* Border color */
}
```

**Ganti dengan warna favorit Anda!**

### Rekomendasi Color Palettes:
- **Professional**: #2E3192 (blue), #1BFFFF (cyan)
- **Creative**: #FF6B6B (red), #4ECDC4 (teal)
- **Modern**: #6C63FF (indigo), #FF006E (pink)

---

## 🔤 Change Fonts

File: `index.html` - Section `<head>`
```html
<!-- Ganti font family di CSS -->
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

**Popular fonts:**
- Google Fonts: https://fonts.google.com/
- System fonts: 'Segoe UI', 'Arial', 'Helvetica'

---

## ⚡ Optimize untuk Performance

### 1. Optimize Images
```bash
# Gunakan tools seperti:
# - TinyPNG.com
# - ImageOptim (Mac)
# - OptiPNG (Windows)
```

### 2. Minify CSS/JS (Optional)
```bash
# Gunakan online tools:
# - css-minifier.com
# - javascript-minifier.com
```

### 3. Check Lighthouse Score
```bash
# Chrome: F12 → Lighthouse
# Check: Performance, Accessibility, Best Practices
```

---

## ✨ Add Features

### 1. Add Dark Mode Toggle
Di `script.js`, tambahkan:
```javascript
// Toggle dark mode
const darkModeToggle = document.querySelector('.dark-mode-btn');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
```

### 2. Add Contact Form
Gunakan service seperti:
- Formspree: https://formspree.io
- Basin: https://usebasin.com
- Email.js: https://www.emailjs.com/

### 3. Add Blog Section
```html
<section id="blog" class="blog">
    <div class="container">
        <h2>Blog</h2>
        <!-- Blog posts -->
    </div>
</section>
```

---

## 🧪 Testing Lokal

### 1. Test di Browser Berbeda
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

### 2. Check Console
- F12 atau Right-click → Inspect
- Tab Console
- Seharusnya tidak ada error (red)

### 3. Test Responsive
- F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test di berbagai ukuran screen
- Mobile (375px), Tablet (768px), Desktop (1920px)

### 4. Test Accessibility
- Tab navigation seharusnya smooth
- Semua links clickable
- Readable font size dan contrast

---

## 📝 Common Issues & Troubleshooting

### Issue: File tidak muncul di browser
**Solution:**
- Pastikan path file benar (case-sensitive)
- Cek file extension (.html, .css, .js)
- Clear browser cache (Ctrl+Shift+Del)

### Issue: Styling tidak apply
**Solution:**
- Refresh browser (Ctrl+F5)
- Check CSS path di HTML
- Buka DevTools → Sources tab

### Issue: Animasi tidak smooth
**Solution:**
- Check browser compatibility
- Update browser ke versi terbaru
- Check GPU acceleration di Chrome

### Issue: Images tidak load
**Solution:**
- Use absolute URL (bukan relative path)
- Check image file size
- Upload ke image hosting (imgur.com, etc)

---

## 📦 Project Structure

```
portfolio-dudul/
├── index.html              # Main HTML file
├── styles.css              # Styling & animations  
├── script.js               # Interactivity
├── README.md               # Documentation
├── DEPLOYMENT.md           # Deployment guide
├── SETUP.md                # Setup guide (ini)
├── CONTRIBUTING.md         # Contribution guidelines
├── CHANGELOG.md            # Version history
├── LICENSE                 # MIT License
├── .gitignore             # Git ignore rules
└── assets/                # (Optional) Folder untuk:
    ├── images/            # Profile, project images
    ├── icons/             # Custom icons
    └── fonts/             # Custom fonts
```

---

## 🚀 Next Steps

Setelah setup lokal:

1. **Edit Content**: Customize portfolio dengan info Anda
2. **Test**: Buka di berbagai browser dan devices
3. **Deploy**: Push ke GitHub dan enable Pages
4. **Share**: Bagikan link portfolio ke orang lain
5. **Update**: Terus update portfolio dengan projek baru

---

## 📞 Need Help?

Jika ada masalah:
- Check [troubleshooting section](#-troubleshooting)
- Baca file DEPLOYMENT.md
- Buka GitHub Issues
- DM [@agent_dudul](https://instagram.com/agent_dudul)

---

**Happy Coding! 🎉**

Semoga portfolio Anda sukses! 🚀
