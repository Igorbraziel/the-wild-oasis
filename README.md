# 🏕️ The Wild Oasis

**The Wild Oasis** is a full-featured hotel admin dashboard built with **React**, **React Query**, **React Router**, **Styled Components**, and **Supabase**. This project simulates the internal system of a hotel, allowing staff to manage bookings, guests, and cabins efficiently.

---

## ✨ Features

- ✅ Authentication system (login/logout)
- 🏡 Cabins management (CRUD)
- 📅 Booking system with filters and status
- 👤 Guest details and booking history
- 📊 Dashboard with KPIs and charts
- 🌐 Responsive and clean UI using Styled Components
- 🔍 Advanced filtering and sorting
- ☁️ Data hosted on Supabase (PostgreSQL + Storage)

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Styled Components
- **State Management**: React Query
- **Backend-as-a-Service**: Supabase (Database, Auth, Storage)
- **Charts**: Recharts
- **Utilities**: date-fns, react-hot-toast, zustand

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Igorbraziel/the-wild-oasis.git
cd the-wild-oasis

npm install
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
npm run dev
