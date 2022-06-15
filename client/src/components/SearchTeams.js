export const SearchTeams = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input
        onChange={(e) => props.handleSearch(e.target.value)}
        placeholder="Search"
        type="text"
      />
    </form>
  );
};