import React from 'react';
import './App.css';

function Guest(props) {
  return (
    <li>
      {props.firstName} {props.lastName}
    </li>
  );
}
export default Guest;
