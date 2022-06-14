import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { getTeamsData } from '../services/apiConfig';
import { SortDropdown } from '../components/SortDropdown'

export default function TeamDirectory() {

  //Holds the array of team objects
  const [teams, setTeams] = useState([]);

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
      <SortDropdown team={teams} />
      {
        teams.map((team) => (
          <TeamCard team={team} />
        ))
      }
    </div>
  )
}
