import React from 'react';
import './App.css';

function Count(props) {
    console.log(props)
  return (
    <div>
      <div>RSVP Recieved: {props.rsvpCount}</div>
      <div>RVSP Waiting: {props.totalCount}</div>
    </div>
  );
}
export default Count;
