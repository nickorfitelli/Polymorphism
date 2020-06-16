import React from 'react';
import './App.css';
import './ClassList.js'

const Student = (props) => {

    return (
        <li>
            Student ID: {props.id}, Name: {props.name}, Class: {props.class}, Role: {props.role}
        </li>
    )
    
   
}

export default Student