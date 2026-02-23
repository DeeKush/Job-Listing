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

function JobList({ jobs, onSaveJob }) {
    return (
        <div className="job-list">
            {/* TODO: Implement mapping logic here */}
            {/* Hint: Use jobs.length > 0 check and slice(0, 10) for now */}

            {jobs.length > 0 ? (
                // Map jobs here...
                <p>Jobs are ready to be mapped!</p>
            ) : (
                // Empty state message...
                <p>No jobs available.</p>
            )}
        </div>
    );
}

export default JobList;
