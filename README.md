# 📦 Shipping Box App

A modern React application for calculating shipping costs of boxes to specific locations worldwide from India. Built with React, TypeScript, Tailwind CSS, and Ant Design, it features a clean, user-friendly interface with a form to add boxes, a table to view all boxes, and a responsive navbar for easy navigation.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shipping-box
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
```bash
VITE_LOCAL_STORAGE_BOX_KEY=boxes
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/   # React components
│   ├── AddBoxForm.tsx    # Form for adding new boxes
│   ├── Navbar.tsx        # Navigation component
│   └── ViewBoxTable.tsx  # Table to display boxes
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
├── App.tsx       # Main application component
└── main.tsx      # Application entry point
```

## 🛠️ Technical Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Library**: Ant Design
- **State Management**: React Hooks
- **Storage**: Local Storage
- **Styling**: Tailwind CSS

## 🎯 Features

- Add box details and calculate cost
- View all boxes in a table
- Persistent storage using browser's localStorage
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## 📊 Code Quality Standards

This project follows these quality standards:

- **Code Style**: ESLint and Prettier for consistent formatting
- **Type Safety**: TypeScript for enhanced code reliability
- **Component Structure**: Modular and reusable React components
- **State Management**: Efficient use of React hooks
- **Performance**: Optimized builds and minimal re-renders