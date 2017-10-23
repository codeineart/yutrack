// import * as express from 'express';
import { Request, Response, NextFunction } from "express";
import { default as Expense, ExpensesModel} from '../models/Expenses';

export let postCreate = (req: Request, res: Response) => {

    let _save = function (){
        if (req.body.name) {
            const expense = new Expense ({
                id:Number(numberId),
                name:req.body.name,
                price:req.body.price,
            });
        
            expense.save();
        
            res.send('Gasto Guardado!');
        }else{
            res.send('Se requiere Nombre del Gasto!');
        }
    }

    // Create number id based on last record
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

export let getRead = (req: Request, res: Response) => {
    Expense.find(function (err, expenses) {

        if (err) return console.error(err);

        //console.log(expenses);

        res.json(expenses);

      })
}

export let postUpdate = (req: Request, res: Response) => {

}

export let getDelete = (req: Request, res: Response) => {
  console.log("Deleting document with id:");  
  console.log(req.query.id);
  Expense.remove({ _id: req.query.id }, (err) => {
    if (err) console.log(err);
    res.send("Elemento borrado");
  })
}

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