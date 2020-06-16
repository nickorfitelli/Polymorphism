import React from 'react';


class NewGuest extends React.Component {

    constructor(props) {
        super(props)
        this.state = { parent: props.parent, firstName: '', lastName: '', rsvp: false }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.id === 'firstname') this.setState({firstName: event.target.value});
        else if (event.target.id === 'lastname') this.setState({lastName: event.target.value});
        else if (event.target.id === 'rsvp') this.setState({rsvp: (event.target.value === 'on') ? true : false});
      }
    
    handleSubmit(event) {
        this.state.parent.addName({firstName: this.state.firstName, lastName: this.state.lastName, rsvp: this.state.rsvp})
        event.preventDefault();
      }

    render () {
        return (
        <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='firstname' placeholder='firstname' onChange={this.handleChange} /><br />
                    <input type='text' id='lastname' placeholder='lastname' onChange={this.handleChange} /><br />
                    RSVP? <input type='checkbox' id='rsvp' name='rsvp' onChange={this.handleChange} /><br />
                    <input type='submit' value='Add Guest'/>
                </form>
            </div>
        )
    }

}

export default NewGuest;
