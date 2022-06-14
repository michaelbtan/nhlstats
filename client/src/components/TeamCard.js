import React from 'react';

export default function TeamCard({ team, id }) {
  return (
    <div>
      <img src="https://i.imgur.com/0mllQct.png" width="200px" alt="NHL logo"/>
      <h2>{team.franchise.teamName}</h2>
      <h4>{team.locationName}</h4>
    </div>
  )
}
