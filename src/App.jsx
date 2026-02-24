import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import JobList from './JobList'
import StatsBar from './StatsBar'

function App() {
  // --- STATE SECTION ---
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [viewMode, setViewMode] = useState("All");

  // --- FETCHING DATA ---
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

  // --- APP LEVEL FUNCTIONS ---

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSaveJob = (job) => {
    /* 
      QUESTION 5: Implement Save Job Logic (No Duplicates)
      --------------------------------------------------
      Task: Add the selected 'job' to the 'savedJobs' state array.
      CRITICAL: A job should NOT be added if it is already in the list.
      
      State involved:
      - savedJobs: The current array of saved jobs.
      
      Expected Behavior:
      If Job A is not in savedJobs, add it.
      If Job A is already in savedJobs, do nothing (alert the user or just ignore).
      
      Example:
      Existing: [{id: 1}] + New: {id: 2} -> Result: [{id: 1}, {id: 2}]
      Existing: [{id: 1}] + New: {id: 1} -> Result: [{id: 1}]
      
      Useful JS Methods: Use '.some()' or '.find()' to check for duplicates by 'id'.
    */

    // SOLVED: Add the job if it's not in the list, remove if it is (Toggle)
    const isDuplicate = savedJobs.some((s) => s.id === job.id);
    if (!isDuplicate) {
      setSavedJobs([...savedJobs, job]);
    } else {
      // Remove the job from saved list
      setSavedJobs(savedJobs.filter(s => s.id !== job.id));
    }
  };

  const toggleView = () => {
    /* 
      QUESTION 6: Implement View Mode Toggling
      ----------------------------------------
      Task: Switch the 'viewMode' state between "All" and "Saved".
      
      State involved:
      - viewMode: A string that is either "All" or "Saved".
      
      Expected Behavior:
      If current view is "All", change it to "Saved".
      If current view is "Saved", change it to "All".
      
      Example:
      Input: "All" -> Click -> Output: "Saved"
      
      Useful Logic: Use a simple if/else statement or a ternary operator.
    */

    // SOLVED: Toggle the viewMode state
    setViewMode(viewMode === "All" ? "Saved" : "All");
  };

  // --- FILTERING LOGIC ---

  /* 
    QUESTION 7: Multi-Level Filtering Logic
    ---------------------------------------
    Task: Calculate which jobs should be displayed on the screen based on BOTH 
    the current view mode and the search text.
    
    Logic Steps:
    1. Filter by View: If viewMode is "Saved", start with only the 'savedJobs'. 
       Otherwise, start with all 'jobs'.
    2. Filter by Search: From those jobs, only keep the ones whose 'title' 
       contains the 'searchText' (case-insensitive).
    
    Variables involved:
    - jobs, savedJobs, viewMode, searchText
    
    Expected Behavior:
    If viewMode="All" and searchText="react", show all jobs with "react" in the title.
    If viewMode="Saved" and searchText="", show all saved jobs.
    
    Useful JS Methods: Use '.filter()', '.toLowerCase()', and '.includes()'.
  */

  // SOLVED: Combined filtering logic for view mode and search text
  const viewFiltered = viewMode === "All" ? jobs : savedJobs;
  const displayedJobs = viewFiltered.filter((job) =>
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      {/* Simple Top Header Bar */}
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
