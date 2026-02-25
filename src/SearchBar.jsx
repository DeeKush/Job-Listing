function SearchBar({ searchText, onSearchChange }) {
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
