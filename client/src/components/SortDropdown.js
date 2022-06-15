export const SortDropdown = (props) => {
  
  const handleSort = (e) => {
    props.handleSort(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleSort(e)}>
        <option defaultValue disabled>
          Sort Alphabetically
        </option>
        <option value="Alpha-Ascending">Alphabetically A-Z</option>
        <option value="Alpha-Descending">Alphabetically Z-A</option>
      </select>
    </form>
  );
};