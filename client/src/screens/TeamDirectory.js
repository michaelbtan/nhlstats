import React, { useState, useEffect } from 'react';
import { getTeamsData } from '../services/apiConfig';

export default function TeamDirectory() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teams = await getTeamsData();
      setTeams(teams);
      console.log(teams);
    }
    getTeams()
  }, [])

  return (
    <div>

    </div>
  )
}
