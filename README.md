# Data Analyst Portfolio Website

A responsive and visually appealing portfolio website for a senior data analyst, showcasing skills, experience, and data analysis projects.

## Features

- Modern and responsive design that works on all devices
- Smooth scrolling and animations
- Interactive skills visualization
- Project showcase with detailed information
- Experience timeline
- Contact form with validation
- Mobile-friendly navigation

## Project Structure

```
data-analyst-portfolio/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg
│   ├── retail-analytics.jpg
│   ├── customer-segmentation.jpg
│   ├── financial-dashboard.jpg
│   └── churn-prediction.jpg
├── projects/
│   ├── retail-sales.html
│   ├── customer-segmentation.html
│   ├── financial-dashboard.html
│   └── churn-prediction.html
└── index.html
```

## Setup and Usage

1. Clone or download this repository
2. Open `index.html` in your web browser to view the website
3. Customize the content in the HTML files to match your own profile and projects
4. Replace the placeholder images in the `images` folder with your own images
5. Modify the CSS styles in `css/styles.css` to match your preferred color scheme and design

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #4361ee;
    --secondary-color: #3a0ca3;
    --accent-color: #4cc9f0;
    /* other variables */
}
```

### Adding Projects

To add a new project:

1. Add a new project card in the projects section of `index.html`
2. Create a new project detail page in the `projects` folder
3. Add a corresponding image in the `images` folder

## Technologies Used

- HTML5
- CSS3 (with CSS variables and flexbox/grid layouts)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome for icons
- Google Fonts

## Browser Compatibility

This website is compatible with all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use. Feel free to modify and customize it for your own portfolio.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration from various modern portfolio websites 