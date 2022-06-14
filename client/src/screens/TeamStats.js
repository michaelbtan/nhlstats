import React, { useState, useEffect } from 'react';
import BackBtn from '../components/BackBtn';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../services/apiConfig';


export default function TeamInfo() {

  const [team, setTeam] = useState({});
  const { id } = useParams(); //id of the team that is selected

  useEffect(() => {
    const getTeamData = async () => {
      const team = await getTeamStats(id);
      setTeam(team);
      console.log('Team Data+++', team)
    }
    getTeamData();
  }, [id]);

  return (
    <div>
      <BackBtn />
    </div>
  )
}
