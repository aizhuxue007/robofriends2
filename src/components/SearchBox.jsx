const SearchBox = ({ handleSearchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                onChange={handleSearchChange}
                placeholder="Search Friends..."
            />
        </div>
    )
}

export default SearchBox;