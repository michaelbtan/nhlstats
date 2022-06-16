import { getTeamsData, getTeamStats } from '../services/apiConfig';

describe("Query API Data", () => {
  it("should return teams data", async () => {
    const teamData = await getTeamsData();
    expect(teamData).toBeDefined();
    expect(teamData.length).toEqual(32);
  });
  it("should return team stats data as an object", async () => {
    const teamStats = await getTeamStats();
    const statsObject = typeof teamStats;
    expect(teamStats).toBeDefined();
    expect(statsObject).toBe("object");
  });
})


