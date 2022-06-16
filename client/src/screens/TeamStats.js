import React, { useState, useEffect } from 'react';
import './TeamStats.css';
import { BackBtn } from '../components/BackBtn';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../services/apiConfig';
// import mockData from '../services/mockData'; 


export default function TeamInfo() {

  //queried team data from the api
  const [teamStats, setTeamStats] = useState({});
  //id of the team that is selected
  const { id } = useParams(); 
  //stats for the season
  const [stats, setStats] = useState({})
  //ranking vs the rest of the league
  const [rank, setRank] = useState({})
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    try {
      const getTeamData = async () => {
        const team = await getTeamStats(id);
        setTeamStats(team);
        // queries season stats for the team
        setStats(teamStats?.[0].splits?.[0].stat);
        //queries to season rankings
        setRank(teamStats?.[1].splits?.[0].stat);
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
        /* Checking to see if the queries team data has loaded */
        isFetching ? <p>Loading...</p> :
      <>
      <div className="teamStats_header">
        <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
        <h2>{teamStats?.[0].splits?.[0].team.name}</h2>
        <h3>2021-2022 Stats</h3>
        {/* color coded bar for rankings */}
          <h4><span id="rankSpan" className="aboveAvg">Top 10</span>
            <span id="rankSpan" className="average">Middle</span>
            <span id="rankSpan" className="belowAvg">Bottom 10</span>
          </h4>
        <BackBtn />
      </div>
      <div className="teamStats">
        <table>
          <thead>
            <tr>
              {/* ranking table header*/}
              {Object.keys(rank).map((key, id) => (
                  <th key={id}>{key}</th>))}
            </tr>
          </thead>
          <tbody>          
            <tr>
              {/* ranking statistics - red cell if the team is below average, yellow if averge, green if above average */}
              {
              Object.values(rank).map((key, id) => (
                <td key={id}
                  className={parseInt(key.slice(0, -2)) <= 10 ? "aboveAvg" :
                    parseInt(key.slice(0, -2)) <= 22 ? "average" :   "belowAvg"
                }
                >{key}</td>))
              }
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              {/* stats table header*/}
              {Object.keys(stats).map((key, id) => (
                  <th key={id}>{key}</th>))}
            </tr>
          </thead>
          <tbody>          
            <tr>
              {/* mapping stats from the stats state*/}
              {Object.values(stats).map((value, id ) => (
                <td key={id}>{value}</td>))}
            </tr>
          </tbody>
        </table>
      </div>
      </>
      }
    </div>
  )
}
