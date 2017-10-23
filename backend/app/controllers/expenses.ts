// expenses.ts || Expense Controller

/*  
*   Basic CR*D for manipulating expenses
*   data model.
*/

import { Request, Response, NextFunction } from "express";
import { default as Expense, ExpensesModel} from '../models/Expenses';


/*
*   Creates expense
*/
export let postCreate = (req: Request, res: Response) => {

    // _save function so we can use on fetch callback
    let _save = function (){
        //validates that name is not empty
        if (req.body.name) {

            // Creates object from Expense data modeling
            const expense = new Expense ({
                id:Number(numberId),
                name:req.body.name,
                price:req.body.price,
            });
            
            // Save the object into mongoDB
            expense.save();
            
            // Sends a raw text response to the client
            res.send('Gasto Guardado!');
        }else{
            // Sends a raw text response to the client
            res.send('Se requiere Nombre del Gasto!');
        }
    }

    // Create numeric id based on the last document inserted
    let numberId;
    let queryId = Expense.findOne().sort({$natural:-1});
    queryId.select('id name');
    queryId.exec(function (err, person) { 
        if (!person){
            numberId = 0;
            _save();
        }else {
            numberId = (Number(person.id) + 1);
            _save();
        } 
    })    
}

/*
*   Load expenses documents and returns them as JSON response
*/
export let getRead = (req: Request, res: Response) => {
    
    // Retrieve all documents
    Expense.find(function (err, expenses) {

        if (err) return console.error(err);

        // Send response in JSON format
        res.json(expenses);

      })
}


/*
*   Updates a document
*/
export let postUpdate = (req: Request, res: Response) => {
    /* TO-DO */
}


/*
*   Deletes a document based on _id 
*/
export let getDelete = (req: Request, res: Response) => {

    Expense.remove({ _id: req.query.id }, (err) => {
        // On error, logs it to the console
        if (err) console.log(err);
        // Sends a raw text response to the client
        res.send("Elemento borrado");
    })
}

/*
*   Debug Purposes
*/
export let test = (req: Request, res: Response) => {
    res.send(`<html>
        <head>
        <title>BackEnd Test</title>
        </head>
        <body>
        <h1>BackEnd Tests</h1>
        <p>
            The current data and time is: 
            <strong>`+new Date()+`</strong>
        </p>    
        </body>
    </html>`);
}