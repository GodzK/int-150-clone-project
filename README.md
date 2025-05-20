iPad Showcase Web Project
Overview
This project is a responsive web page designed to showcase Apple's iPad product lineup in Thai, inspired by Apple's official website. It highlights various iPad models (iPad Pro, iPad Air, iPad, iPad mini), accessories (Apple Pencil, keyboards), and services (Apple Trade In, iCloud, Apple Support). The page features a modern, interactive design with smooth scrolling, animations, and a mobile-friendly layout.
Features

Navigation Bar: Top navigation with a mobile-friendly hamburger menu.
Horizontal Scrollable Menu: Displays iPad models, accessories, and services with icons.
Hero Section: Prominent title, tagline, and looping video showcasing the iPad.
Interactive Cards: Scrollable sections for iPad use cases (productivity, creativity, etc.) and benefits of buying from Apple.
Product Listings: Detailed iPad model specifications with images, prices, and accessory compatibility.
Dropdown Section: Explains iPad compatibility with other Apple devices (iPhone, Mac, Apple Watch).
Animations: Scroll-based video effects, fade-in sections, and smooth scrolling for card containers.
Responsive Design: Adapts seamlessly to desktop, tablet, and mobile screens.

Technologies Used

HTML5: Semantic structure for the web page.
CSS3: Custom styles with Tailwind CSS for responsive design and animations.
JavaScript: Handles interactivity (menu toggle, dropdowns, smooth scrolling, animations).
Fonts: Uses "Noto Sans Thai" for Thai text support.
Assets: Images, SVGs, and videos stored in the ./assets folder.

Prerequisites
To run this project locally, ensure you have:

A modern web browser (e.g., Chrome, Firefox, Safari).
A local server (e.g., Live Server extension in VS Code, or any static file server).
An internet connection (to load Tailwind CSS and Google Fonts).

Setup Instructions

Clone or Download the Repository:

Clone this repository to your local machine:git clone <repository-url>


Alternatively, download the project as a ZIP file and extract it.


Navigate to the Project Directory:
cd <project-directory>


Ensure Assets are Available:

Place all required assets (images, SVGs, videos) in the ./assets folder. The project expects files like:
applelogo.png, apple.png (logos)
ipadvideo.mp4 (hero video)
ipadpro.svg, ipadair.svg, pencil.svg, etc. (menu icons)
ipadpro.png, ipadair.png, etc. (product images)
card1.jpg, card2.jpg, etc. (background images for cards)
applepencil.jpg, magickeyboard.jpg (accessory images)
why1.svg, why2.svg, etc. (benefit icons)
ipadiphone.jpg, ipadandmac.jpg, etc. (dropdown images)




Run the Project:

Open index.html in a web browser. For the best experience, use a local server:
If using VS Code, install the "Live Server" extension, right-click index.html, and select "Open with Live Server".
Alternatively, use a simple HTTP server like http-server:npm install -g http-server
http-server .


Access the page at http://localhost:8080 (or the port provided).





File Structure
├── assets/                  # Folder for images, SVGs, and videos
│   ├── applelogo.png
│   ├── apple.png
│   ├── ipadvideo.mp4
│   ├── ipadpro.svg
│   ├── ipadair.svg
│   ├── pencil.svg
│   ├── card1.jpg
│   ├── applepencil.jpg
│   ├── why1.svg
│   ├── ipadiphone.jpg
│   └── ... (other assets)
├── index.html              # Main HTML file
├── styles.css              # Custom CSS styles
└── README.md               # Project documentation

Usage

Navigation: Use the top navigation bar to explore product categories. On mobile, click the hamburger icon (☰) to toggle the menu.
Menu: Scroll horizontally through the .list-menu to view iPad models and services.
Product Listings: Scroll through the .ipad-property-container to compare iPad models, view specs, and check prices.
Dropdowns: Click the dropdown headers in the "คู่สร้างคู่สม" section to learn about iPad compatibility with other Apple devices.
Animations: Scroll down to see fade-in effects and video scaling in the hero section.

Known Issues

Asset Dependencies: Missing assets in the ./assets folder will cause broken images or videos. Ensure all files listed in index.html are present.
Scrolling: The scrollCards function may not work if the container selector is incorrect or elements are missing. Check the console for errors.
Responsive Design: On very small screens (<480px), some text may wrap awkwardly. Adjust font sizes in styles.css if needed.

Future Improvements

Add smooth scrolling buttons to the .list-menu section (similar to .ipad-property-container).
Implement a vertical menu option for smaller screens.
Add hover effects to the .list-menu items for better interactivity.
Include links to actual Apple product pages for "ดูเพิ่มเติม" and "ซื้อ" buttons.

Contributing
Feel free to fork this project, make improvements, and submit pull requests. For major changes, please open an issue first to discuss your ideas.
License
This project is for educational purposes and is not affiliated with Apple Inc. All trademarks and assets belong to their respective owners.
Contact
For questions or feedback, please reach out via GitHub issues.

Last updated: May 20, 2025
