export const filterEasternConf = (arr) => {
    return arr.filter(team => team.conference.name.toLowerCase() === 'eastern');
}

export const filterWesternConf = (arr) => {
  return arr.filter(team => team.conference.name.toLowerCase() === 'western');
}
