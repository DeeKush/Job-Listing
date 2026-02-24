/* 
  QUESTION 1: Handle Search Input Changes
  ---------------------------------------
  Task: Implement the 'handleChange' function so that it notifies the parent component 
  whenever the user types in the search box.
  
  Props involved: 
  - onSearchChange: A function passed from App.jsx to update the 'searchText' state.
  
  Expected Behavior:
  When a user types "React" into the input, this function should capture the current 
  value of the input and pass it as an argument to 'onSearchChange'.
  
  Example:
  Input: User types 'h'
  Execution: calls onSearchChange('h')
  
  Useful JS Trick: Use 'e.target.value' to get the text from the input field.
*/

function SearchBar({ searchText, onSearchChange }) {
    const handleChange = (e) => {
        // SOLVED: Pass the current input value to the parent
        const newValue = e.target.value;
        onSearchChange(newValue);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a job title..."
                value={searchText}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;
