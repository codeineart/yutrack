import React, { Component } from 'react';
import './List.css';

export class ExpensesList extends Component {
    //constructor(props){
    //    super(props);
    //}

    deleteRow(_id){
        console.log(_id);
        fetch('/endpoint/delete?id='+ _id);
        this.props.onSubmit();
    }

    render(){
        return(
            <div>
            
                {
                   this.props.data.map(entry => 
                    <div className="entries" key={entry.id}>
                        <div className="dataEntry">
                            Gasto: { entry.name }
                            <br/>
                            Precio: {entry.price }    
                        </div>
                   
                    <button 
                        className="delEntry" 
                        onClick={ () => { this.deleteRow(entry._id) } }>
                        Borrar</button>
                    </div>
                    )
                }
                <div>{ this.props.test }</div>
            </div>

        );
    }
}