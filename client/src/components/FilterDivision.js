export const FilterDivision = (props) => {
  
  const handleFilter = (e) => {
    props.handleFilter(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleFilter(e)}>
        <option value="Select">Select Division</option>
        <option value="Metro-Division">Metro Division</option>
        <option value="Atlantic-Division">Atlantic Division</option>
        <option value="Central-Division">Central Division</option>
        <option value="Pacific-Division">Pacific Division</option>
      </select>
    </form>
  );
};