"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Expenses_1 = require("../models/Expenses");
exports.postCreate = (req, res) => {
    let _save = function () {
        if (req.body.name) {
            const expense = new Expenses_1.default({
                id: Number(numberId),
                name: req.body.name,
                price: req.body.price,
            });
            expense.save();
            res.send('Gasto Guardado!');
        }
        else {
            res.send('Se requiere Nombre del Gasto!');
        }
    };
    // Create number id based on last record
    let numberId;
    let queryId = Expenses_1.default.findOne().sort({ $natural: -1 });
    queryId.select('id name');
    queryId.exec(function (err, person) {
        if (!person) {
            numberId = 0;
            _save();
        }
        else {
            numberId = (Number(person.id) + 1);
            _save();
        }
    });
};
exports.getRead = (req, res) => {
    Expenses_1.default.find(function (err, expenses) {
        if (err)
            return console.error(err);
        //console.log(expenses);
        res.json(expenses);
    });
};
exports.postUpdate = (req, res) => {
};
exports.getDelete = (req, res) => {
    console.log("Deleting document with id:");
    console.log(req.query.id);
    Expenses_1.default.remove({ _id: req.query.id }, (err) => {
        if (err)
            console.log(err);
        res.send("Elemento borrado");
    });
};
exports.test = (req, res) => {
    res.send(`<html>
        <head>
        <title>BackEnd Test</title>
        </head>
        <body>
        <h1>BackEnd Tests</h1>
        <p>
            The current data and time is: 
            <strong>` + new Date() + `</strong>
        </p>    
        </body>
    </html>`);
};
