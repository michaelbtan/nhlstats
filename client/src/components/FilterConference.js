export const FilterConference = (props) => {
  
  const handleConfFilter = (e) => {
    props.handleConfFilter(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleConfFilter(e)}>
        <option value="Select">Select Conference:</option>
        <option value="Eastern-Conference">Eastern Conference</option>
        <option value="Western-Conference">Western Conference</option>
      </select>
    </form>
  );
};