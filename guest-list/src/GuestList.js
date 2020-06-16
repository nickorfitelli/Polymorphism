import React from 'react';
import './App.css';
 import Guest from './Guest'
import Count from './Count'
import { getQueriesForElement } from '@testing-library/react';
import NewGuest from './NewGuest'

class GuestList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            guests: [
                {firstName: "Rachel", lastName: "Green", rsvp: true},
                {firstName: "Ross", lastName: "Geller", rsvp: false},
                {firstName: "Monica", lastName: "Geller", rsvp: true},
                {firstName: "Chandler", lastName: "Bing", rsvp: false},
                {firstName: "Joey", lastName: "Tribbiani", rsvp: false},
                {firstName: "Leslie", lastName: "Knope", rsvp: true},
                {firstName: "April", lastName: "Ludgate", rsvp: true},
                {firstName: "Ann", lastName: "Perkins", rsvp: false},
                {firstName: "Ron", lastName: "Swanson", rsvp: false},
                {firstName: "Tom", lastName: "Haverford", rsvp: true},
                {firstName: "Ben", lastName: "Wyatt", rsvp: false},
                {firstName: "Donna", lastName: "Meagle", rsvp: true},
                {firstName: "Andy", lastName: "Dwyer", rsvp: false},
                {firstName: "Jerry", lastName: "Gergitch", rsvp: true},
                ]
        }
    }

    addName(obj) {
        this.state.guests.push(obj)
        this.setState({ 'guests' : this.state.guests })
      }

    //   changeRSVP() {
          
    //   }

    render() {
        let rsvp = this.state.guests.filter(guest => guest.rsvp === true)
        let notRsvp = this.state.guests.filter(guest => guest.rsvp === false)
        rsvp.sort((a, b) => {
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1
            return 0
        })
        notRsvp.sort((a, b) => {
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1
            return 0
        })
        return (
        <div>
            <h3>RSVP Attendees</h3>
            <ul>
            {rsvp.map(guest => <Guest firstName={guest.firstName} lastName={guest.lastName}/>)}
            </ul>
            <h3>Awaiting Response</h3>
            <ul>
            {notRsvp.map(guest => <Guest firstName={guest.firstName} lastName={guest.lastName}/>)}
            </ul>
             <Count rsvpCount = {rsvp.length} totalCount = {notRsvp.length}/>
             <br/>
             <NewGuest parent={this}/>   
        </div>
       
        );
    }
}

export default GuestList;                                                                                                                                                                                                                                                                                 