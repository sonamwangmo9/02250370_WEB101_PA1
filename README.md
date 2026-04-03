# Netflix Clone (WEB101 PA1)

## Description
This project is a Netflix-style homepage built using React and Vite. The main goal of this assignment was to understand how modern web applications are created using a component-based approach. Instead of building everything in one file, the page is divided into smaller reusable components, making the code more organized and easier to manage.

---

## Functionality
The application recreates a simplified version of the Netflix homepage. It includes:

- A navigation bar with the Netflix logo and menu items  
- A banner section showing a featured movie with title, description, and action buttons  
- Multiple rows of movies such as "Trending" and "Top Rated"  
- Horizontally scrollable movie posters  

The layout is designed to be similar to Netflix while focusing on learning React concepts rather than copying the design exactly.

---

## Components
The application is built using the following components:

- Navbar: Displays the logo and navigation menu  
- Banner: Shows a featured movie with description and buttons  
- Row: Represents a category of movies  
- MovieCard: Displays individual movie posters  

Each component has a single responsibility and can be reused where needed.

---

## Component Structure
The App component acts as the main container. It includes the Navbar, Banner, and multiple Row components. Each Row component contains several MovieCard components to display movie posters.

---

## Data Handling
Movie data is stored as arrays inside the App component and passed down to child components using props. This allows the Row and MovieCard components to be reusable and display different sets of movies.

---

## Responsive Design
The application is designed to work on different screen sizes including desktop, tablet, and mobile devices. CSS media queries are used to adjust layout, text size, and image size to ensure a good user experience across devices.

---

## Features
- Component-based structure using React  
- Reusable components for better code organization  
- Responsive layout for different screen sizes  
- Horizontal scrolling movie rows  
- Basic hover effects for movie posters  

---

## Technologies Used
- React.js  
- Vite  
- CSS  

---

## How to Run

1. Install dependencies:
   npm install  

2. Start the development server:
   npm run dev  

3. Open the project in your browser using the local server link provided.

---

## Notes
This project focuses on understanding React fundamentals such as components, props, and layout design. It is not a full clone of Netflix, but a simplified version created for learning purposes.


github link: https://github.com/sonamwangmo9/02250370_WEB101_PA1.git