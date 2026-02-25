function JobCard({ job, onSave, isSaved }) {
    return (
        <div className="job-card">
            <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.body ? job.body.substring(0, 100) + '...' : ''}</p>
            </div>

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
