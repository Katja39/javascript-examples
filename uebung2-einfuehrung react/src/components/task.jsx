import React, { Component } from 'react';
import '../App.css';

export default class Task extends Component {
    state = {  }
    render() { 
        return (
        <div class="column">
        <h1>{this.props.taskHeadline}</h1>
        <p>{this.props.task}</p>
        <button onClick={()=>this.props.onDelete(this.props.id)}>Löschen</button></div>
        )}      

}
