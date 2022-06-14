import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamCard({ team, id }) {
  return (
    <div id={id}>
      <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
      <h2>{team.franchise.teamName}</h2>
      <h4>{ team.venue.city }, {team.locationName }</h4>
      <h4>Conference: {team.conference.name}</h4>
      <h4>Division: {team.division.nameShort}</h4>
      <Link to={`/${team.id}`}>See more</Link>
    </div>
  )
}
