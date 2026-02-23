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

    // TODO: Implement the update logic here using setSavedJobs
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

    // TODO: Implement the toggle logic here using setViewMode
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

  // TODO: Implement the final displayedJobs filter
  const displayedJobs = jobs; // Current placeholder

  return (
    <div className="app-container">
      <h1>My Refactored Job Portal</h1>

      <div className="top-section">
        <SearchBar
          searchText={searchText}
          onSearchChange={handleSearchChange}
        />

        <button className="toggle-btn" onClick={toggleView}>
          View: {viewMode} (Click to Change)
        </button>
      </div>

      <StatsBar savedJobs={savedJobs} />

      {loading ? (
        <p className="loading">Fetching jobs from the server...</p>
      ) : (
        <JobList
          jobs={displayedJobs}
          onSaveJob={handleSaveJob}
        />
      )}
    </div>
  )
}

export default App
