import React, { useState, useEffect } from 'react';
import './TeamDirectory.css';
import TeamCard from '../components/TeamCard';
import { getTeamsData } from '../services/apiConfig';
import { SortDropdown } from '../components/SortDropdown';
import { sortAZ, sortZA } from '../utils/sort';
import { FilterConference } from '../components/FilterConference';
import { FilterDivision } from '../components/FilterDivision';
import { filterEasternConf, filterWesternConf, filterMetroDiv, filterAtlDiv, filterPacDiv, filterCenDiv } from '../utils/filter';
import { SearchTeams } from '../components/SearchTeams';

export default function TeamDirectory() {

  //Holds the array of team objects
  const [teams, setTeams] = useState([]);
  const [applySort, setApplySort] = useState(true);
  const [filterTeams, setFilterTeams] = useState();

  //applies to the search component
  const handleSearch = (e) => {
    const res = teams.filter((team) =>
      team.franchise.teamName.toLowerCase().includes(e.toLowerCase())
    );
    setFilterTeams(res);
  };

  //applies to the sorting dropdown
  const handleSort = (e) => {
    if (e === "Alpha-Ascending" && filterTeams) {
      setFilterTeams(sortAZ(filterTeams));
      setApplySort(!applySort);
    } setTeams(sortAZ(teams));
      setApplySort(!applySort);
    if (e === "Alpha-Descending" && filterTeams) {
      setFilterTeams(sortZA(filterTeams));
      setApplySort(!applySort);
    } setTeams(sortZA(teams));
      setApplySort(!applySort);
  };

  //applies to the conference and division filter dropdown
  const handleFilter = (e) => {
    if (e === "Select") {
      setFilterTeams();
    }
    if (e === "Eastern-Conference") {
      setFilterTeams(filterEasternConf(teams));
    }
    if (e === "Western-Conference") {
      setFilterTeams(filterWesternConf(teams));
    }
    if (e === "Metro-Division") {
      setFilterTeams(filterMetroDiv(teams));
    }
    if (e === "Atlantic-Division") {
      setFilterTeams(filterAtlDiv(teams));
    }
    if (e === "Central-Division") {
      setFilterTeams(filterPacDiv(teams));
    }
    if (e === "Pacific-Division") {
      setFilterTeams(filterCenDiv(teams));
    }
  };

  //prevent refresh on submit
  const handleSubmit = (e) => e.preventDefault();

  //Calls the api-endpoint when the app loads
  useEffect(() => {
    const getTeams = async () => {
      const teams = await getTeamsData();
      setTeams(teams);
      console.log(teams)
    }
    getTeams();
  }, [])

  return (
    <div>
      <h2>Welcome to the NHL Team Data App!</h2>
      <div className="filters">
      <SearchTeams onSubmit={handleSubmit} handleSearch={handleSearch} />
      <FilterConference handleFilter={handleFilter} handleSubmit={handleSubmit} />
      <FilterDivision handleFilter={handleFilter} handleSubmit={handleSubmit} />
      {/* sorts alphabetically the filterTeams state if it is not empty */}
      {filterTeams ?
        <SortDropdown handleSort={handleSort} handleSubmit={handleSubmit} />
        : <SortDropdown handleSort={handleSort} handleSubmit={handleSubmit} />
        }
      </div>
      <div className="teamListings">
      {/* renders teams from the filterTeams state if it is not empy */}
      {filterTeams ? 
        filterTeams.map((team, id) => (
          <TeamCard team={team} key={id}/>
        ))
        : teams.map((team, id) => (
          <TeamCard team={team} key={id}/>
        ))
      }
      </div>
    </div>
  )
}
