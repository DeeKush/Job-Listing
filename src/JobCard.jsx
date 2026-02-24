/* 
  QUESTION 2: Implement Save Button Logic
  ---------------------------------------
  Task: Update the component so that clicking the "Save Job" button triggers the 
  saving process for the current job.
  
  Props involved:
  - job: The specific job object for this card (contains id, title, etc.)
  - onSave: A function passed from the parent to handle the saving logic.
  
  Expected Behavior:
  When the button is clicked, it should execute the 'onSave' function and 
  pass the current 'job' object into it.
  
  Example:
  State: job = { id: 1, title: 'Frontend Developer' }
  Action: User clicks "Save Job"
  Result: calls onSave({ id: 1, title: 'Frontend Developer' })
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
