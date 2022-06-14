export const filterEasternConf = (arr) => {
  return arr.filter(team => team.conference.name.toLowerCase() === 'eastern');
};

export const filterWesternConf = (arr) => {
  return arr.filter(team => team.conference.name.toLowerCase() === 'western');
};

export const filterMetroDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'metro');
};

export const filterAtlDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'atl');
};

export const filterPacDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'pac');
};

export const filterCenDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'cen');
};