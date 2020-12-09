export default function SearchBox({ searchField, searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name="searchField"
        placeholder="Search cats here..."
        onChange={searchChange}
        value={searchField}
      />
    </div>
  );
}
