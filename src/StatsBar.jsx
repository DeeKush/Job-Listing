/* 
  StatsBar Component: Displays the number of saved jobs.
*/
function StatsBar({ savedJobs }) {
    // Calculate total saved jobs
    const count = savedJobs.length;

    return (
        <div className="stats-bar">
            <p>Total Saved Jobs: {count}</p>
        </div>
    );
}

export default StatsBar;
