import axios from 'axios';

const teams_baseURL = `https://statsapi.web.nhl.com/api/v1/teams`;
// const teamStats_baseURL = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;

// imports the teams data from the api
export const getTeamsData = async () => {
  try {
    const res = await axios.get(teams_baseURL);
    return res.data.teams; //filters to the team objects
  } catch (error) {
    throw error;
  }
};