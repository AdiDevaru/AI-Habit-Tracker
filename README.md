# 🤖 AI Habit Tracker

A full-stack **AI-powered habit tracking application** built with the **MERN stack** and **Google Gemini AI**.

Track habits, build streaks, visualize progress, and get personalized AI insights based on your habit history.

## ✨ Features

* 📋 **Habit Management** — Create, edit, archive, delete, and reorder habits
* 🔥 **Streak Tracking** — Current & longest streaks with daily completion tracking
* 📊 **Progress Analytics** — 30-day statistics and GitHub-style 90-day heatmap
* 🤖 **AI Insights** — Weekly reports, habit suggestions, recovery plans, and AI chat
* 🔐 **Authentication** — JWT-based authentication with protected routes
* 🌙 **Modern UI** — Responsive design with light/dark mode

## 🛠️ Tech Stack

**Frontend**

* React + Vite
* Tailwind CSS
* Axios
* React Router
* Context API

**Backend**

* Node.js + Express
* MongoDB + Mongoose
* JWT + bcrypt
* Google Gemini API

## 🏗️ Project Structure

```text
AI-Habit-Tracker/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── prompts/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   └── ai-habit-tracker-ui/
│       ├── src/
│       ├── public/
│       └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AdiDevaru/AI-Habit-Tracker.git
cd AI-Habit-Tracker
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

Create `backend/.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

### 3. Frontend

```bash
cd frontend/ai-habit-tracker-ui
npm install
npm run dev
```

Create `frontend/ai-habit-tracker-ui/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🧠 AI Features

The application sends relevant habit and completion data to **Google Gemini** to generate personalized insights such as:

* Weekly habit analysis
* Personalized habit suggestions
* Streak recovery plans
* Morning motivation
* Natural-language habit analysis

## 👨‍💻 Author

**Adithya Devanu**

Built to explore **MERN stack development, AI integration, data analytics, and full-stack application architecture**.

---

⭐ If you find this project useful, consider giving it a star!
