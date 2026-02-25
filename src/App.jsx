import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import JobList from './components/JobList'
import StatsBar from './components/StatsBar'

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [viewMode, setViewMode] = useState("All");

  // Fetch jobs from API on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSaveJob = (job) => {
    const isAlreadySaved = savedJobs.some((s) => s.id === job.id);
    if (!isAlreadySaved) {
      setSavedJobs([...savedJobs, job]);
    } else {
      setSavedJobs(savedJobs.filter((s) => s.id !== job.id));
    }
  };

  const toggleView = () => {
    setViewMode(viewMode === "All" ? "Saved" : "All");
  };

  // Filter jobs based on view mode and search text
  const baseJobs = viewMode === "All" ? jobs : savedJobs;
  const displayedJobs = baseJobs.filter((job) =>
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <div className="header-content">
          <span className="logo-text">JobPortal</span>
          <nav>
            <button className={`nav-btn ${viewMode === "All" ? "active" : ""}`} onClick={() => setViewMode("All")}>
              All Jobs
            </button>
            <button className={`nav-btn ${viewMode === "Saved" ? "active" : ""}`} onClick={() => setViewMode("Saved")}>
              Saved Jobs
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="search-section">
          <h2>Search your dream job</h2>
          <div className="search-box-wrapper">
            <SearchBar
              searchText={searchText}
              onSearchChange={handleSearchChange}
            />
          </div>
        </section>

        <div className="results-info">
          <p className="job-count">Showing {displayedJobs.length} jobs</p>
          <StatsBar savedJobs={savedJobs} />
        </div>

        {loading ? (
          <div className="loading-container">
            <p className="loading-text">Finding best opportunities for you...</p>
          </div>
        ) : (
          <JobList
            jobs={displayedJobs}
            savedJobs={savedJobs}
            onSaveJob={handleSaveJob}
          />
        )}
      </main>
    </div>
  )
}

export default App
