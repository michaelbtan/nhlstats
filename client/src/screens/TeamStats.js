import React, { useState, useEffect } from 'react';
import { BackBtn } from '../components/BackBtn';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../services/apiConfig';


export default function TeamInfo() {

  const [teamStats, setTeamStats] = useState({});
  const { id } = useParams(); //id of the team that is selected

  useEffect(() => {
    const getTeamData = async () => {
      const team = await getTeamStats(id);
      setTeamStats(team);
      console.log('Team Data+++', team)
    }
    getTeamData();
  }, [id]);

  return (
    <div>
      <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
      <h2>{teamStats.name}</h2>
      <BackBtn />
    </div>
  )
}
