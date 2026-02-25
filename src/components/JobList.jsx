import JobCard from './JobCard';

function JobList({ jobs, savedJobs, onSaveJob }) {
    return (
        <div className="job-list">
            {jobs.length > 0 ? (
                jobs.map((item) => {
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
