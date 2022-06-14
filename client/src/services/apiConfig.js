import axios from 'axios';

const api = `https://statsapi.web.nhl.com/api/v1/teams`;
// const teamData_baseURL = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;

// export the teams data from the api
export const getTeamsData = async () => {
  try {
    const res = await axios.get(api);
    return res.data.teams; //filters to the team objects
  } catch (error) {
    throw error;
  }
};

// export the individual team data from the api
export const getIndividualTeamData = async (id) => {
  try {
    const res = await axios.get(api, `/${id}/stats`)
    return res
  } catch(error) {
    throw error;
  }
};