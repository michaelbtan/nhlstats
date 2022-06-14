import React from 'react';

export default function TeamCard({ team }) {
  return (
    <div>
      <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
      <h2>{team.franchise.teamName}</h2>
      <h4>{ team.venue.city }, {team.locationName }</h4>
      <h4>Conference: {team.conference.name}</h4>
      <h4>Division: {team.division.nameShort}</h4>
    </div>
  )
}
