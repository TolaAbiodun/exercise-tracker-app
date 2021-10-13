import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
        
        // bind this to  state Variables
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 


        // create react variables to update state
        this.state = {
            username: '',
            description: '',
            duration: '',
            date: new Date(),
            users: [] 
        };
    }

    // Life cycle method
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    // update state variables
    onChangeUsername(event) {
       this.setState({username: event.target.value});
    }

    onChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    onChangeDuration(event) {
        this.setState({duration: event.target.value});
    }

    onChangeDate(date) {
        this.setState({date: date});
    }

    // Form submit event
    onSubmit(event) {
        event.preventDefault();

        const exercise = {
            username: this.state.username, 
            description: this.state.description, 
            duration: this.state.duration, 
            date: this.state.date
        }

        console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
            // insert form here
            <div>
                <h4>Create New Exercise</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            { 
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div>
                    

                </form>
            </div>

        );
    }
}