import axios from 'axios';

const teams_baseURL = `https://statsapi.web.nhl.com/api/v1/teams`;
const teamStats_baseURL = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;

export const getTeamsData = async () => {
  try {
    const data = await axios.get(teams_baseURL);
    return data;
  } catch (error) {
    throw error;
  }
};

