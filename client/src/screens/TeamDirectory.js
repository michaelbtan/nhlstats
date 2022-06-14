import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { getTeamsData } from '../services/apiConfig';
import { SortDropdown } from '../components/SortDropdown';
import { sortAZ, sortZA } from '../utils/sort';
import { FilterConference } from '../components/FilterConference';
import { filterEasternConf, filterWesternConf } from '../utils/filter';

export default function TeamDirectory() {

  //Holds the array of team objects
  const [teams, setTeams] = useState([]);
  const [applySort, setApplySort] = useState(true);
  const [applyFilter, setApplyFilter] = useState(true);


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

    //applies to the sorting dropdown
  const handleConfFilter = (e) => {
    if (e === "Select") {
      setTeams(teams);
    }
    if (e === "Eastern-Conference") {
      setTeams(filterEasternConf(teams));
    }
    if (e === "Western-Conference") {
      setTeams(filterWesternConf(teams));
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
      <SortDropdown handleSort={handleSort} handleSubmit={handleSubmit} />
      { teams ?
        teams.map((team, id) => (
          <TeamCard team={team} id={id}/>
        ))
        : null
      }
    </div>
  )
}
