import JobCard from './JobCard';

/* 
  JobList Component: Renders a list of JobCard components or an empty state message.
*/
function JobList({ jobs, savedJobs, onSaveJob }) {
    return (
        <div className="job-list">
            {/* SOLVED: Map jobs array to JobCard components and handle empty state */}
            {jobs.length > 0 ? (
                jobs.map((item) => {
                    // Check if this specific job is currently saved
                    const isSaved = savedJobs.some(s => s.id === item.id);
                    return <JobCard key={item.id} job={item} onSave={onSaveJob} isSaved={isSaved} />
                })
            ) : (
                <p className="no-jobs">No jobs found. Try a different search!</p>
            )}
        </div>
    );
}

export default JobList;
