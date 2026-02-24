import JobCard from './JobCard';

/* 
  QUESTION 3: Rendering the List and Empty State
  ----------------------------------------------
  Task: Loop through the 'jobs' array and render a 'JobCard' for every single job.
  Also, handle the case where there are no jobs to display.
  
  Props involved:
  - jobs: An array of job objects to be displayed.
  - onSaveJob: The function to be passed down to each JobCard.
  
  Expected Behavior:
  1. If jobs = [job1, job2], the component should render two <JobCard /> components.
  2. If jobs = [], the component should render a <p> tag saying "No jobs found. Try a different search!".
  
  Example:
  Input: jobs.length is 0
  Output: <p>No jobs found. Try a different search!</p>
  
  Useful JS Method: Use the '.map()' method to transform the objects into components.
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
