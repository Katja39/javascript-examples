import React, { Component } from 'react';
import Header from './header';
import TaskList from './taskList';
import '../index.css'

export default class App extends Component {
    state = {  }
    
    render() { 
        return (
            <div class="application">
            <Header/>
            <TaskList/></div>
            )
    }
}