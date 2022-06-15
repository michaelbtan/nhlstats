import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { getTeamsData } from '../services/apiConfig';
import { SortDropdown } from '../components/SortDropdown';
import { sortAZ, sortZA } from '../utils/sort';
import { FilterConference } from '../components/FilterConference';
import { FilterDivision } from '../components/FilterDivision';
import { filterEasternConf, filterWesternConf, filterMetroDiv, filterAtlDiv, filterPacDiv, filterCenDiv } from '../utils/filter';

export default function TeamDirectory() {

  //Holds the array of team objects
  const [teams, setTeams] = useState([]);
  const [applySort, setApplySort] = useState(true);
  const [filterTeams, setFilterTeams] = useState();


  //applies to the sorting dropdown
  const handleSort = (e) => {
    if (e === "alpha-ascending") {
      setTeams(sortAZ(teams));
      setApplySort(!applySort);
    }
    if (e === "alpha-descending") {
      setTeams(sortZA(teams));
      setApplySort(!applySort);
    }
  };

  //applies to the conference filter dropdown
  const handleConfFilter = (e) => {
    if (e === "Select") {
      setFilterTeams();
    }
    if (e === "Eastern-Conference") {
      setFilterTeams(filterEasternConf(teams));
    }
    if (e === "Western-Conference") {
      setFilterTeams(filterWesternConf(teams));
    }
  };

    //applies to the division filter dropdown
    const handleDivFilter = (e) => {
      if (e === "Select") {
        setFilterTeams();
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
      <h2>Welcome to the NHL Team Data App</h2>
      <h4>Some additonal features include:</h4>
      <ul>
        <li>Sort teams from A-Z or Z-A</li>
        <li>Filter teams by both division or conference</li>
      </ul>
      <FilterConference handleConfFilter={handleConfFilter} handleSubmit={handleSubmit} />
      <FilterDivision handleDivFilter={handleDivFilter} handleSubmit={handleSubmit} />
      <SortDropdown handleSort={handleSort} handleSubmit={handleSubmit} />
      {filterTeams ? 
        filterTeams.map((team, id) => (
          <TeamCard team={team} id={id}/>
        ))
        : teams.map((team, id) => (
          <TeamCard team={team} id={id}/>
        ))
      }
    </div>
  )
}
