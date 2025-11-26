# MK Nexus Calculators Suite

![MK Nexus Calculators Suite](https://img.shields.io/badge/Version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)

A feature-rich web application providing essential calculation tools for everyday use. Built with modern web technologies and designed for optimal user experience across all devices.

## 🚀 Features

### Core Utilities

1. **Compound Interest Calculator**
   - Investment growth calculation
   - Multiple compounding options
   - Principal vs. interest breakdown

2. **Freelancer Time Calculator**
   - Billable hours with break deductions
   - Time format support
   - Real-time earnings

3. **Smart Unit Converter**
   - Length, weight, temperature conversions
   - Real-time updates
   - High-precision results

### ✨ User Experience

- Dark/Light Mode
- Fully responsive layout
- Real-time calculations
- Smart defaults
- Copy to clipboard
- Smooth animations
- Toast notifications

### 🛠️ Technical Features

- Single Page Application
- Local Storage preferences
- Modern JavaScript ES6+
- CSS Custom Properties
- Accessibility support
- Performance optimized

## 📦 Installation

### Local Setup
1. Clone or download the repository
2. Ensure these files are in one folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `logo.png` (optional)

3. Open `index.html` in any modern browser.

### Web Deployment
Upload all files to your hosting service or GitHub Pages.

## 📖 Usage Guide

### Compound Interest Calculator
Enter principal, interest rate, years, and compounding frequency.

**Example**: $1,000 at 5% for 10 years (monthly) → **$1,647.01**

### Freelancer Time Calculator
Set times, hourly rate, and break duration.

**Example**: 9–5 with 30 min break at $50/hr → **$375**

### Smart Unit Converter
Enter value, pick category and units.

**Example**: 100 meters → 328.084 feet

## 🎨 Customization

### Theming
```css
:root {
    --primary-color: rgb(1, 126, 243);
    --background-color: #f4f7f9;
    --card-color: #ffffff;
}
```

### Adding Unit Conversions
```javascript
this.conversionFactors.set('newUnit-targetUnit', factor);
this.unitCategories.set('newCategory', [
    { value: 'unit1', label: 'Unit One', icon: '🔧' }
]);
```

## 📁 File Structure

```
mk-nexus-calculators-suite/
├── index.html
├── style.css
├── script.js
├── logo.png
└── README.md
```

## 🌐 Browser Support

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 60+     | Full    |
| Firefox | 55+     | Full    |
| Safari  | 12+     | Full    |
| Edge    | 79+     | Full    |

## 🔧 Technical Details

* HTML5, CSS3, JavaScript
* CSS Grid & Flexbox
* Local Storage
* No build tools required
* Bundle size < 50KB

## 🐛 Troubleshooting

1. **File not found**
   Ensure all files are in one folder.

2. **Styles not loading**
   Check if `style.css` exists.

3. **Functions not working**
   Confirm JavaScript is enabled.

## 🤝 Contributing

1. Report bugs via Issues
2. Suggest features via Discussions
3. Submit pull requests

## 📄 License

MIT License. See LICENSE file for details.

## 👨‍💻 Developer

**Muhammad Maqsood**
- Email: [mmknexus@gmail.com](mailto:mmknexus@gmail.com)

## 🏢 MK Nexus

Professional software solutions with a focus on user-friendly applications.

## 📋 Changelog

### v2.0.0
* UI redesign
* Dark/Light theme
* Real-time calculations
* Copy-to-clipboard
* Improved mobile layout

### v1.0.0
* Initial release
* Three core calculators
```
