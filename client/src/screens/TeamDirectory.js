import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { getTeamsData } from '../services/apiConfig';

export default function TeamDirectory() {

  //Holds the array of team objects
  const [teams, setTeams] = useState([]);

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
      {
        teams.map((team) => (
          <TeamCard team={team} />
        ))
      }
    </div>
  )
}
