# Calorie Tracker - React & TypeScript

A simple and intuitive Calorie Tracker app built with **React**, **TypeScript**, **ContextAPI**, and **useReducer**. The app allows users to track their calorie consumption and exercise, providing a summary of total calories consumed, burned, and the net balance. It features a modern UI designed with **Tailwind CSS** and **Heroicons**.

## Features

- **Friendly Frontend Design**: Styled with Tailwind CSS for a responsive and visually appealing interface, including SVG icons from Heroicons.
- **Add Food or Exercise**: Log food items or exercises, specifying the calories consumed (for food) or burned (for exercises).
- **Update and Remove Entries**: Modify or delete any food or exercise entry you've previously added.
- **Calorie Summary**: Displays total calories consumed, total calories burned, and the net calorie balance.
- **Activity and Food List**: View a detailed list of all the foods and exercises you have added to the app.

## Demo

You can try the live version of the app on **[Vercel](https://your-vercel-app-url.vercel.app)**.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Static typing for improved development experience and code quality.
- **ContextAPI**: Used for managing global state throughout the app.
- **useReducer**: To handle complex state logic for adding, updating, and removing activities.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Heroicons**: SVG icons for enhanced user experience.
- **Vite**: A fast and lightweight build tool for front-end development.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Vite](https://vitejs.dev/) (installed globally)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calorie-tracker.git
   ```
2. Navigate to the project directory:
  ```bash
  cd calorie-tracker
  ```
3. Install Dependencies
  ```bash
  npm install
  ```
4. Start the development server:
  ```bash
  npm run dev
  ```
5. Open the app in your browser at [[http://localhost:3000]]

## How it Works

- The app uses ContextAPI to manage the global state of calorie entries.
- useReducer is used to handle state transitions for adding, updating, and removing food/exercise items.
- Each activity is stored with the type (food or exercise), calories (positive for food, negative for exercise), and can be updated or deleted at any time.
- The Calorie Summary calculates total calories consumed, total calories burned, and the net balance dynamically.

## License

This Project is licensed under the MIT License. See the [[LICENSE]] file for more details.

---
Made with ♥️ Thomas Schrödinger
