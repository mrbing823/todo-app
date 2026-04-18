# Todo App

A clean, minimal React todo application with active/completed task management and localStorage persistence.

## Features

- Add tasks with a custom title via the input field (press Enter or click "+ Add")
- Tasks are split into **Active** and **Completed** columns side by side
- Click the circle icon on an active task to mark it complete
- Click the green checkmark on a completed task to move it back to active
- All tasks persist across browser refreshes via **localStorage**

## Component Architecture

```
App (parent — state + localStorage)
├── AddNewTodo (input form, prop: onAdd)
└── TodoItem × N (individual task, props: task, onToggle)
```

## Tech Stack

- **React 18** with `useState` and `useEffect` hooks
- **Vite** for fast development and bundling
- **Tailwind CSS** for utility-first styling

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
todo-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── index.css         # Tailwind directives
    ├── App.jsx           # Root component — state & layout
    └── components/
        ├── AddNewTodo.jsx  # Input form component
        └── TodoItem.jsx    # Individual task component
```
