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

  useEffect(() => {
    try {
      const getTeamData = async () => {
        const team = await getTeamStats(id);
        setTeamStats(team);
        setMock(mockData?.[0].splits?.[0].stat);
        setMock2(mockData?.[1].splits?.[0].stat);
        console.log('fffff', Object.keys(mock))
        console.log('fffff', typeof Object.keys(mock))
      }
      getTeamData();
    } catch (error) {
      throw error;
    }
  }, [id]);

  return (
    <div>
      <div className="teamStats_header">
        <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
        <h2>{mockData?.[0].splits?.[0].team.name}</h2>
      </div>
      <div className="teamStats">
        <table>
          <tr>
            {
              Object.keys(mock).map((key) => (
                <th>{key}</th>
              ))
            }
          </tr>
          <tr>
            {
              Object.values(mock).map((key) => (
                <th>{key}</th>
              ))
            }
          </tr>
          {/* <tr>
            {
              Object.values(mock2).map((key) => (
                <th>{key}</th>
              ))
            }
          </tr> */}
        </table>
        <h5>{JSON.stringify(mock2)}</h5>
      </div>
      <BackBtn />
    </div>
  )
}
