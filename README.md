# Job Listing Mini Portal 💼

A simple, interactive job browsing and saving tool built with React. This project was developed as part of **Class Project 1 | Group B**.

## 🚀 Overview
The Job Listing Mini Portal allows users to fetch real-time "job" listings (mapped from posts), search for specific roles, and manage a personalized list of saved jobs. It features a clean, responsive UI with multi-view state management.

## ✨ Features
- **Fetch Jobs:** Automatically fetches job data on mount using `useEffect`.
- **Search Functionality:** Real-time search to filter jobs by role/title.
- **Save Jobs:** Bookmark jobs with a single click.
- **Remove from Saved:** Toggle-based saving/unsaving functionality (Bonus implemented).
- **Navigation Toggle:** Switch between "All Jobs" and "Saved Jobs" views.
- **Saved Jobs Count:** Live tracker showing the total number of saved jobs.
- **Loading States:** Graceful loading indicators while fetching data.

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **State Management:** `useState`
- **Side Effects:** `useEffect`
- **Styling:** Vanilla CSS
- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) (Mapped to Job roles)

## 📋 Functional Requirements (Project 8)
- [x] Fetch jobs using `useEffect`
- [x] Store state for: `jobs`, `searchText`, `savedJobs`, `viewMode`
- [x] Search by role/title
- [x] "Save Job" button → adds to/removes from saved list
- [x] Show saved jobs count
- [x] Remote from saved jobs (Bonus)

## 🧱 Project Structure
```text
src/
├── components/
│   ├── JobCard.jsx    # Individual job display with Save toggle
│   ├── JobList.jsx    # Container for rendering the list of jobs
│   ├── SearchBar.jsx  # Search input component
│   └── StatsBar.jsx   # Displays the count of saved jobs
├── App.jsx            # Main app logic and state orchestration
├── App.css            # Global styling and layout
└── main.jsx           # Entry point
```

## ⚙️ Setup & Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

### 📊 Evaluation Metrics Met
- ✅ API integration works
- ✅ State management correct
- ✅ Interactivity implemented
- ✅ Conditional rendering
- ✅ UI clarity & structure
- ✅ Code readability
