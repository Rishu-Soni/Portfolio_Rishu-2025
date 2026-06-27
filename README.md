# Link: https://portfolio-rishu.pages.dev
# 👨‍💻 Rishu Soni's Personal Portfolio (Latest Version)

Welcome to the newest iteration of my personal portfolio website! This version is a major upgrade from the previous iteration, heavily focusing on interactive UI elements, smooth animations, and a highly engaging user experience.

## 🚀 What's New in this Version?

This iteration goes beyond a static digital resume by introducing dynamic background effects, scroll-based animations, and polished user feedback components. 

*   **✨ Particle Backgrounds**: Implemented stunning interactive background effects using `tsparticles`.
*   **🎬 Fluid Animations**: Smooth entrance, exit, and scroll-triggered animations powered by `framer-motion`.
*   **📱 Enhanced Interactions**: 
    *   A custom `scrollIndicator` for better UX on long pages.
    *   A dedicated `contact` form section.
    *   Beautiful, customized popup alerts using `SweetAlert2`.
*   **🧩 Component Revamp**: A completely refactored React component structure (`Project_page`, `About`, `Nav`, `hand`) for better maintainability and performance.
*   **⚡ Blazing Fast**: Still built on the Vite + React 19 ecosystem for instant HMR and optimized production builds.

## 🛠️ Technology Stack

This project leverages some of the best modern frontend libraries:

*   **React 19**: Component-based UI library.
*   **Vite**: Next-generation frontend tooling.
*   **Framer Motion**: Production-ready motion library for React.
*   **tsParticles**: Lightweight library for creating highly customizable particle animations.
*   **SweetAlert2**: Beautiful, responsive, customizable accessible replacement for JavaScript's popup boxes.
*   **CSS/HTML**: Custom styling encapsulated within the `src/CSS` directory.

## 📁 Project Structure

*   `src/`: Contains all the React source code.
    *   `main.jsx`: The React application entry point.
    *   `background.jsx`: Configuration and component for the `tsparticles` background.
    *   `Nav.jsx`: Interactive navigation menu.
    *   `About.jsx`: Personal background and skills showcase.
    *   `Project_page.jsx`: Dedicated showcase for coding projects.
    *   `contact.jsx`: Contact form with `SweetAlert2` feedback.
    *   `scrollIndicator.jsx`: Visual indicator for page scroll depth.
    *   `hand.jsx`: Custom cursor or waving hand animation component.
    *   `CSS/`: Directory containing component-specific styles.
    *   `Assets/`: Local images, SVGs, and other media.

## 💻 Running Locally

To run this upgraded portfolio on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Portfolio_Rishu_latest
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser to the local URL provided in your terminal (typically `http://localhost:5173`).
