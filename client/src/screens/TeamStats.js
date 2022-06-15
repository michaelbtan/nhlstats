import React, { useState, useEffect } from 'react';
import './TeamStats.css';
import { BackBtn } from '../components/BackBtn';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../services/apiConfig';
import mockData from '../utils/mockData'; 


export default function TeamInfo() {

  const [teamStats, setTeamStats] = useState({});
  const { id } = useParams(); //id of the team that is selected
  const [mock, setMock] = useState({})
  const [mock2, setMock2] = useState({})
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    try {
      const getTeamData = async () => {
        const team = await getTeamStats(id);
        setTeamStats(team);
        setMock(teamStats?.[0].splits?.[0].stat);
        setMock2(teamStats?.[1].splits?.[0].stat);
        setIsFetching(false);
      }
      getTeamData();
    } catch (error) {
      throw error;
    }
  }, [id, teamStats]);

  return (
    <div>
      {
        isFetching ? <p>Loading...</p> :
      <>
      <div className="teamStats_header">
        <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
        <h2>{teamStats?.[0].splits?.[0].team.name}</h2>
      </div>
      <div className="teamStats">
        <table>
          <thead>
          <tr>
            {Object.keys(mock).map((key, id) => (
                <th key={id}>{key}</th>))}
          </tr>
          </thead>
          <tbody>          
          <tr>
            {Object.values(mock).map((key, id ) => (
                <td key={id}>{key}</td>))}
          </tr>
          <tr>
            {Object.values(mock2).map((key, id) => (
                <td key={id}>{parseInt(key.slice(0, -2))}</td>))}
          </tr>
          </tbody>
        </table>
      </div>
      </>
      }
      <BackBtn />
    </div>
  )
}
