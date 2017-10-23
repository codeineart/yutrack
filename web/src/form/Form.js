import React, { Component } from 'react';
import './Form.css';

export class SubmitForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            message: this.props.message,
            response: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log( "Item: " + this.state.name + "\nPrecio: " + this.state.price);
        event.preventDefault();
        this.setState({name: ''});
        this.setState({price: 0});
        fetch('/endpoint/create', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.name,
              price: this.state.price,
            })
          }).then((response) => response.text())
          .then((response) => { 
              console.log(response); 
              this.setState({'response': response});
              this.props.onSubmit();
            })
          .catch((error) => { 
              console.error(error); 
            });
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    render(){
        return(
            <div>
                <h1 className="title" >{ this.state.message }</h1>
                <h4>{ this.state.name + " -$" + this.state.price }</h4>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>
                    Nombre del Gasto: <br/>
                    <input type="text" name="name" value={this.state.name} onChange={ this.onChange } />
                    </label>

                    <br/>
                    
                    <label>
                    Monto del Gasto: <br/>
                    <input type="text" value={this.state.price} onChange={ (event) => { this.setState({price: event.target.value}) } }  />
                    </label>
                    <br/><br/>
                    <input className="submitButton" type="submit" value="Submit" />
                    
                    <p>{ this.state.response }</p>
                </form>
            </div>

        );
    }
}