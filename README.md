# 📒 iNotebook

**iNotebook** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where users can securely log in and manage their personal notes — all in one place. It’s designed for simplicity, speed, and productivity, with a clean UI built using Bootstrap and React (Vite).

---

## 🌐 Live Demo

🔗 [Click here to try the live app](https://i-notebook-3pxp.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Bootstrap, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## 📦 Features

- 🔐 Secure user login & signup
- 📝 Create, update, and delete personal notes
- 🧠 Clean, responsive UI with Bootstrap
- 🔁 Notes stored securely in MongoDB
- 🧾 JWT-based protected routes

---

## 🚀 Getting Started

To run this project locally, clone the repo and follow these steps for frontend and backend.

---

## 🖥️ Frontend (Vite + React)

### 📁 Location: `/frontend`

### 🔧 Setup:

1. Navigate to the frontend folder:
   ```bash
   cd frontend

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_API_URL=http://localhost:5000
   VITE_APP_VERSION=1.0.0
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

---

## 🗂️ Backend (Express + MongoDB)

### 📁 Location: `/backend`

### 🔧 Setup:

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   KEY=mysecretkey
   PORT=5000
   DB_URI=mongodb://localhost:27017/iNotebook
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

---

## 📂 Project Structure

```
iNotebook/
├── frontend/       # React + Vite frontend
│   └── .env        # Environment config (VITE_API_URL)
├── backend/        # Node.js + Express backend
│   └── .env        # DB and JWT key config
└── README.md
```

---

## 📎 Environment Files Example

### 🧪 `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_VERSION=1.0.0
```

### 🧪 `backend/.env`:

```env
KEY=mysecretkey
PORT=5000
DB_URI=mongodb://localhost:27017/iNotebook
```

---

## 📁 Repository

🔗 GitHub: [https://github.com/shivamEr/iNotebook](https://github.com/shivamEr/iNotebook)

---

## 🙌 Credits

Created with 💻 by [Shivam kr singh](https://github.com/shivamEr)

---

## 📜 License

This project is open-source and free to use under the MIT License.


