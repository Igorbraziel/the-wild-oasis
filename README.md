# The Wild Oasis

The Wild Oasis is a full-featured hotel admin dashboard built with React, React Query, React Router, Styled Components, and Supabase. This project simulates the internal system of a hotel, enabling staff to manage bookings, guests, and cabins efficiently.

**Live Demo / Deployment:**  
[braziel-the-wild-oasis.netlify.app](https://braziel-the-wild-oasis.netlify.app/)

---

## ✨ Features

- ✅ Authentication (login / logout)  
- Cabins management (CRUD)  
- Booking system with filtering & status management  
- Guest profiles & booking history  
- Dashboard with KPIs, charts, and analytics  
- Responsive, clean UI using Styled Components  
- Advanced filtering, sorting & pagination  
- Data hosted on Supabase (PostgreSQL + Storage)  

---

## 🧰 Tech Stack

| Layer             | Tools / Libraries                                 |
|------------------|----------------------------------------------------|
| Frontend / UI     | React, React Router DOM, Styled Components         |
| State / Data       | React Query, zustand (if used), date-fns          |
| Backend / BaaS     | Supabase (Database, Auth, Storage)                |
| Charts / Visuals   | Recharts                                           |
| Notifications / UX | react-hot-toast                                     |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Igorbraziel/the-wild-oasis.git
cd the-wild-oasis

2. Install dependencies
npm install

(or yarn install if you prefer)

3. Setup environment variables

Create a .env (or .env.local) file in the root and add:

VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key


You can get these values from your Supabase project settings.

4. Run the development server
npm run dev


Visit http://localhost:3000 (or the port shown in console) to view the app locally.

📦 Build & Deployment

To build the app for production:

npm run build

You can deploy the generated build folder to platforms like Vercel, Netlify, or any static hosting. The current live version is hosted via Netlify.

📝 Folder Structure
/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── styles/
├── .eslintrc.cjs
├── netlify.toml
├── package.json
├── vite.config.js
└── README.md