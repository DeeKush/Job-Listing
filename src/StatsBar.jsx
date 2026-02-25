function StatsBar({ savedJobs }) {
    const count = savedJobs.length;

    return (
        <div className="stats-bar">
            <p>Total Saved Jobs: {count}</p>
        </div>
    );
}

export default StatsBar;
