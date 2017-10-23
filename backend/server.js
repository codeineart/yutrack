"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./app/main");
const http = require("http"); // node http module
const port = 3001;
main_1.default.set('port', port);
//create a server and pass our Express app to it.
const server = http.createServer(main_1.default);
server.listen(port, () => {
    console.log('Listening on port ' + port);
});
