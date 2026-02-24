/* 
  JobCard Component: Displays information for a single job and a save/unsave toggle.
*/
function JobCard({ job, onSave, isSaved }) {
    return (
        <div className="job-card">
            <div className="job-info">
                <h3>{job.title}</h3>
                {/* We can also show the body/description here */}
                <p>{job.body ? job.body.substring(0, 100) + '...' : ''}</p>
            </div>

            {/* SOLVED: Change text based on isSaved and toggle onClick */}
            <button
                className={isSaved ? "saved-btn" : "save-btn"}
                onClick={() => onSave(job)}
            >
                {isSaved ? "Saved" : "Save Job"}
            </button>
        </div>
    );
}

export default JobCard;
