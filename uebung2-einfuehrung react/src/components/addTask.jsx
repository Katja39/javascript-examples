import React, { Component } from 'react';
import '../App.css';

export default class addTask extends Component {

    state = {
    headline:'',
    description:''
      }

      handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div class="column">
                <input type="text" name="headline" placeholder="Überschrift eingeben" value={this.state.headline} onChange={this.handleInputChange}/>
                <textarea name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
                <br></br>
                <button onClick={()=>this.props.onSave(this.state.headline, this.state.description)}>Speichern</button>
            </div>

        )
     }

}