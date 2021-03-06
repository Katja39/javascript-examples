import React, { Component } from 'react';
import '../App.css';
import Task from './task';
import AddTask from './addTask';


export default class TaskList extends Component {
    state = {
        tasks: [
            { id: 1, subject: " Küche aufräumen", body: "Die Küche muss aufgeräumt werden... lorem ipsum dolor set amet" },
            { id: 2, subject: " Spazieren gehen", body: "Frische Luft tut gut... lorem ipsum dolor set amet" },
            { id: 3, subject: " Essen machen", body: "Hunger!... lorem ipsum dolor set amet" },
            { id: 4, subject: " Einkaufen gehen", body: "Der Kühlschrank ist leer... lorem ipsum dolor set amet" },
            { id: 5, subject: " Web-Aufbau-Aufgabe umsetzen", body: "Die aktuelle Übungsaufgabe muss noch umgesetzt werden... lorem ipsum dolor set amet" },
            { id: 6, subject: " SWT-Vorlesung ansehen", body: "Die letzte Vorlesung ansehen... lorem ipsum dolor set amet" },
            { id: 7, subject: " Unterlagen sortieren", body: "Die Unterlagen stapeln sich... lorem ipsum dolor set amet" },
            { id: 8, subject: " Wäsche waschen", body: "Die Wäsche muss gewaschen werden... lorem ipsum dolor set amet" },
            { id: 9, subject: " Bücher zurückbringen", body: "Es müssen Bücher zurückgebracht werden... lorem ipsum dolor set amet" },
            { id: 10, subject: " Mails beantworten", body: "Die Mails müssen beantwortet werden... lorem ipsum dolor set amet" }
        ],
        currentPosition: 0
    }

    constructor() {
        super();
        this.handleButtonClickFirst = this.handleButtonClickFirst.bind(this);
        this.handleButtonClickNext = this.handleButtonClickNext.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleSave=this.handleSave.bind(this);
    }

    render() {
        const {currentPosition} = this.state;
        return (
            <React.Fragment>
                <button onClick={() => this.handleButtonClickFirst()}>Erste</button>
                <button onClick={() => this.handleButtonClickNext()} >Nächste</button>
                <div class="numberOfTasks"><h4>Anzahl der Aufgaben: {this.state.tasks.length}</h4></div>
                
                <div class="row">
                {this.state.tasks.length===0 && <div class="column"><h1>Keine Aufgaben</h1></div>}
                    {this.state.tasks.slice(currentPosition, currentPosition + 3).map(task => (
                    <Task 
                    key={task.id}
                    id={task.id}
                    taskHeadline={task.subject}
                    task={task.body}
                    onDelete={this.handleDelete} />))}
                    <AddTask
                    onSave={this.handleSave}/></div>
            </React.Fragment>

        )
    }

    handleButtonClickFirst() {
        this.setState({ currentPosition: 0 })
    }
    handleButtonClickNext() {
        const { currentPosition } = this.state;
        var newPosition
        if (currentPosition < this.state.tasks.length-3) {
            newPosition = currentPosition + 1;
        } else {
            newPosition = 0;
        }
        this.setState({ currentPosition: newPosition })
    }
    handleDelete(taskID){
            const tasks=this.state.tasks.filter(task=>task.id!==taskID);
            this.setState({tasks});
            
    }
    handleSave(headline, description){
        const newTasks = this.state.tasks;
        var newtask={
            'id':this.state.tasks.length+1,
            'subject':headline,
            'body':description
        };
        newTasks.push(newtask);
        this.setState({
            tasks:newTasks
        })
        this.state.currentPosition=this.state.tasks.length-3;
    }
}