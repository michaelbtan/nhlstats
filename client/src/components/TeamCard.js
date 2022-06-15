import React from 'react';
import { Link } from 'react-router-dom';
import './TeamCard.css'

export default function TeamCard({ team, id }) {
  return (
    <div className="teamCard" id={id}>
      <img src="https://i.imgur.com/0mllQct.png" width="100px" alt="NHL logo"/>
      <h2>{team.franchise.teamName}</h2>
      {/* checks if the venue city and location name is the same */}
      {
        team.venue.city === team.locationName ?
          <h4>{team.locationName}</h4>
          : <h4>{team.venue.city}, {team.locationName}</h4>
      }
      <h4>Conference: {team.conference.name}</h4>
      <h4>Division: {team.division.nameShort}</h4>
      <Link to={`/${team.id}`}>See more</Link>
    </div>
  )
}