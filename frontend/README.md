# iNotebook MERN Stack Project - Frontend with React and Vite

This repository contains the frontend of the **iNotebook** project, built using **React** with **Vite** for a fast and optimized development experience. The project is part of a full-stack MERN (MongoDB, Express, React, Node.js) application.

---

## 🚀 Features
- **React with Vite**: Super-fast build and dev server.
- **Modern UI**: Clean and responsive interface for note management.
- **Integration**: Communicates seamlessly with the backend for CRUD operations.
- **Reusable Components**: Modular and maintainable codebase.

---

## 🛠 Prerequisites

Ensure you have the following installed:
1. **Node.js** (v14 or later)  
   [Download Node.js](https://nodejs.org/)
2. **npm** or **yarn** (comes with Node.js)
3. Backend setup:
   - Clone and set up the backend repository for the iNotebook project.

---

## 📂 Folder Structure
```
iNotebook-Frontend/
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable components (e.g., Navbar, NoteItem)
│   ├── pages/            # Page-specific components (e.g., Home, About)
│   ├── context/          # Context API setup (e.g., NoteContext)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point for React and Vite
│   ├── index.css         # Global CSS
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## 🏃‍♂️ Running the Frontend

Follow these steps to get the frontend up and running:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/iNotebook-Frontend.git
cd iNotebook-Frontend
```

### 2. Install Dependencies
Install the required packages using npm or yarn:
```bash
npm install
# OR
yarn install
```

### 3. Start the Development Server
Run the development server with Vite:
```bash
npm run dev
# OR
yarn dev
```

This will start the frontend server. Open your browser and navigate to the address displayed in the terminal (e.g., `http://localhost:5173`).

---

## ⚙️ Configuration
1. **Backend API Base URL**:
   Update the `API_BASE_URL` in the `src/context/NoteContext.js` file to match your backend server's URL (e.g., `http://localhost:5000`).

2. **Environment Variables**:
   Create a `.env` file in the root of your project to manage sensitive information (optional).

---

## 📦 Building for Production
To create an optimized build for deployment:
```bash
npm run build
# OR
yarn build
```
The production-ready files will be generated in the `dist` directory.

---

## 🧪 Testing
You can test the functionality by integrating it with the backend and performing CRUD operations (create, read, update, delete) on notes.

---

## 🤝 Contributing
Feel free to fork this repository, submit issues, or create pull requests. Contributions are welcome!

---

## 📝 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🌟 Acknowledgments
- **Vite** for a blazing-fast development experience.
- **React** for its powerful component-based architecture.
- MERN stack for building scalable web applications.

---

Enjoy coding! 🚀