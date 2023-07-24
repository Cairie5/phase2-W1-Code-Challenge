// SearchBar.jsx
import React from 'react';

// SearchBar component for filtering transactions based on description
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    // Input element to capture search input
    <input
      type="text"
      value={searchTerm} // Set the value of the input field to the searchTerm state
      onChange={(e) => setSearchTerm(e.target.value)} // Call setSearchTerm when the input value changes
      placeholder="Search by description" // Placeholder text to guide users for what to search
    />
  );
};

export default SearchBar;
