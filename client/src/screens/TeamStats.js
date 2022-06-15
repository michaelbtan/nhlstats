import React, { useState, useEffect } from 'react';
import { BackBtn } from '../components/BackBtn';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../services/apiConfig';
import mockData from '../utils/mockData'; 


export default function TeamInfo() {

  const [teamStats, setTeamStats] = useState({});
  const { id } = useParams(); //id of the team that is selected
  const [mock, setMock] = useState({})
  const [mock2, setMock2] = useState({})

  useEffect(() => {
    try {
      const getTeamData = async () => {
        const team = await getTeamStats(id);
        setTeamStats(team);
        setMock(mockData?.[0].splits?.[0].stat);
        setMock2(mockData?.[1].splits?.[0].stat);
      }
      getTeamData();
    } catch (error) {
      throw error;
    }
  }, [id]);

  return (
    <div>
      <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
      <h2>{mockData?.[0].splits?.[0].team.name}</h2>
      <h5>{JSON.stringify(mock)}</h5>
      <h5>{JSON.stringify(mock2)}</h5>
      <BackBtn />
    </div>
  )
}
