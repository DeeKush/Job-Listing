/* 
  SearchBar Component: Handles user input for filtering jobs.
*/
function SearchBar({ searchText, onSearchChange }) {
    // Function to handle input changes and notify parent
    const handleChange = (e) => {
        onSearchChange(e.target.value);
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
