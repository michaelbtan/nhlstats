
export const SortDropdown = (props) => {
  
  const handleSort = (e) => {
    props.handleSort(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select className="displayedProducts_sort" onChange={(e) => handleSort(e)}>
        <option selected disabled>
          Sort By:
        </option>
        <option value="alpha-ascending">Alphabetically A-Z</option>
        <option value="alpha-descending">Alphabetically Z-A</option>
      </select>
    </form>
  );
};