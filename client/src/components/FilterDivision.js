export const FilterDivision = (props) => {
  
  const handleDivFilter = (e) => {
    props.handleDivFilter(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleDivFilter(e)}>
        <option value="Select">Select Division</option>
        <option value="Metro-Division">Metro Division</option>
        <option value="Atlantic-Division">Atlantic Division</option>
        <option value="Central-Division">Central Division</option>
        <option value="Pacific-Division">Pacific Division</option>
      </select>
    </form>
  );
};