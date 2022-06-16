//Eastern Conference
export const filterEasternConf = (arr) => {
  return arr.filter(team => team.conference.name.toLowerCase() === 'eastern');
};

//Western Conference
export const filterWesternConf = (arr) => {
  return arr.filter(team => team.conference.name.toLowerCase() === 'western');
};

//Metro Division
export const filterMetroDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'metro');
};

//Atlantic Division
export const filterAtlDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'atl');
};

//Pacific Division
export const filterPacDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'pac');
};

//Central Division
export const filterCenDiv = (arr) => {
  return arr.filter(team => team.division.nameShort.toLowerCase() === 'cen');
};