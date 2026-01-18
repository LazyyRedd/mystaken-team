# MYSTAKEN ESPORTS - Official Website

![MYSTAKEN Esports](assets/images/banner.png)

## 🎮 About

The official website for **MYSTAKEN Esports**, a global esports organisation established in 2021. 

**#MystakenStrong 💪**

## 📁 Project Structure

```
WEBSITE/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/
│       ├── logo.png       # MYSTAKEN logo (add your logo)
│       └── banner.png     # Hero banner image (add your banner)
└── README.md              # This file
```

## 🚀 Setup Instructions

### 1. Add Your Images

Place your images in the `assets/images/` folder:

- **logo.png** - The MYSTAKEN "X" logo (recommended: 500x500px, transparent PNG)
- **banner.png** - The hero banner image (recommended: 1920x1080px or wider)

### 2. Open the Website

Simply open `index.html` in your web browser, or use a local server:

**Using VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**Using Node.js:**
```bash
npx serve
```

## ✨ Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI** - Dark theme with red accents matching MYSTAKEN branding
- **Smooth Animations** - Scroll reveal, parallax effects, glitch text
- **Interactive Elements** - Tilt effects on player cards, hover animations
- **Preloader** - Professional loading animation
- **Contact Form** - Ready for backend integration
- **Social Links** - Direct links to Twitter/X, Instagram, Discord

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#C8102E` | Accents, buttons, highlights |
| Dark Background | `#0a0a0a` | Main background |
| Card Background | `#111111` | Cards and sections |
| White | `#ffffff` | Primary text |
| Gray | `#b0b0b0` | Secondary text |

## 📱 Sections

1. **Hero** - Full-screen banner with logo and call-to-action
2. **About** - Organization history and stats
3. **Roster** - 2025 Major 2 COD team + other teams
4. **Achievements** - Timeline of milestones
5. **Join Us** - Recruitment for content creators and players
6. **Contact** - Contact form and social links
7. **Footer** - Links and hashtag banner

## 🔗 Social Links

- Twitter/X: [@MystakenEsports](https://x.com/MystakenEsports)
- Instagram: [@mystaken_org](https://www.instagram.com/mystaken_org/)
- Discord: [Linktree](https://discord.com/invite/AUsSRUKHpq)

## 📄 2025 Major 2 Roster (COD)

- TwistedFZ
- AlfaCoD
- ChunkyBoy
- DizzyTT

## 🛠️ Customization

### Updating Player Information

Edit the player cards in `index.html` under the `#roster` section:

```html
<div class="player-card">
    <div class="player-image">
        <!-- Add player image here -->
    </div>
    <div class="player-info">
        <h3 class="player-name">PlayerName</h3>
        <span class="player-role">Role</span>
    </div>
</div>
```

### Adding Team Achievements

Add new timeline items in the achievements section:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">Date</span>
        <h3>Achievement Title</h3>
        <p>Description of the achievement.</p>
    </div>
</div>
```

## 📧 Contact Form Integration

The contact form currently simulates submission. To make it functional:

1. **Formspree** (easiest):
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Custom Backend**: Modify the form submission handler in `main.js`

## 📜 License

© 2021 - 2026 MYSTAKEN Esports. All rights reserved.

---

**EST. 2021 | Worldwide**

**#MystakenStrong 💪**
