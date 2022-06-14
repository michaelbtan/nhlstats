import axios from 'axios';

const api = `https://statsapi.web.nhl.com/api/v1/teams`;

// export the teams data from the api
export const getTeamsData = async () => {
  try {
    const res = await axios.get(api);
    return res.data.teams; //queries the array of team objects
  } catch (error) {
    throw error;
  }
};

// export the individual team data from the api
export const getTeamStats = async (id) => {
  try {
    const res = await axios.get(`${api}/${id}/stats`);
    return res.data.stats; //queries the team's stats
  } catch(error) {
    throw error;
  }
};