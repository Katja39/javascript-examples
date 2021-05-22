import React, { Component } from 'react';
import '../index.css';

export default class Task extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                 <div class="column">
        <h1>{this.props.taskHeadline}</h1>
        <p>{this.props.task}</p></div>
        </React.Fragment>
        )}
}
