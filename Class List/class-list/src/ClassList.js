import React from 'react';
import './App.css';
import  Student from './Student.js'

const ClassList = (props) => {
        return (
            <div>
                {props.people.map(student => <Student id = {student.id} name = {student.name} class = {student.class} role = {student.role}/>)}
            </div>
        )
    //return (<li>ID: {student.id}, Name: {props.name}, Class: {props.class}, Role: {props.role}</li>)
   
}

export default ClassList