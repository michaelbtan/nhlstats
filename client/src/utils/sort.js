// A - Z
export const sortAZ = (arr) =>
  arr.sort((a, b) => {
    if (a.franchise.teamName.toLowerCase() < b.franchise.teamName.toLowerCase()) {
      return -1;
    }
    if (a.franchise.teamName.toLowerCase() > b.franchise.teamName.toLowerCase()) {
      return 1;
    }
    return 0;
  });

// Z - A
export const sortZA = (arr) =>
  arr.sort((a, b) => {
      if (a.franchise.teamName.toLowerCase() < b.franchise.teamName.toLowerCase()) {
        return -1;
      }
      if (a.franchise.teamName.toLowerCase() > b.franchise.teamName.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    .reverse();