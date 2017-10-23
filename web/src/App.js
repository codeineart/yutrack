import React, { Component } from 'react';
import './App.css';
import { SubmitForm } from './form/Form';
import { ExpensesList } from './list/List';
 

class App extends Component {
  state = {
    expensesEntries: [],
    testData: String
  }

  componentDidMount() {
    fetch('/endpoint/read')
      .then(res => res.json())
      .then(expensesEntries => this.setState({ expensesEntries }));
      //.then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">

        <h1 className="App-header ">Lista de Gastos</h1>

        <div className="ExpensesList" >
          <ExpensesList 
            data={ this.state.expensesEntries } 
            test={ this.state.testData } 
            onSubmit={ this.componentDidMount.bind(this) }/>
        </div>
       
        <div className="SubmitForm">
          <SubmitForm message={ "Agregar Gasto" } 
              onSubmit={ this.componentDidMount.bind(this) }/>
        </div>
        

      </div>
    );
  }
}

export default App;