/* 
  QUESTION 4: Displaying the Saved Jobs Count
  ------------------------------------------
  Task: Calculate how many jobs the user has saved and display it in the UI.
  
  Props involved:
  - savedJobs: An array containing all the jobs currently saved by the user.
  
  Expected Behavior:
  The component should read the number of items in the 'savedJobs' array and 
  render that number inside the paragraph.
  
  Example:
  Input: savedJobs = [{id: 1}, {id: 2}]
  Output: "Total Saved Jobs: 2"
  
  Useful JS Trick: Use the '.length' property of the array.
*/

function StatsBar({ savedJobs }) {
    // TODO: Calculate the count of saved jobs
    const count = 0; // Placeholder

    return (
        <div className="stats-bar">
            <p>Total Saved Jobs: {count}</p>
        </div>
    );
}

export default StatsBar;
