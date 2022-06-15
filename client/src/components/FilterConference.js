export const FilterConference = (props) => {
  
  const handleFilter = (e) => {
    props.handleFilter(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleFilter(e)}>
        <option value="Select">Select Conference</option>
        <option value="Eastern-Conference">Eastern Conference</option>
        <option value="Western-Conference">Western Conference</option>
      </select>
    </form>
  );
};