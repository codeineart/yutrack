import App from './app/main';
import * as http from 'http';

// Port definition
const port = 3001;

// Set port for App class instance
App.set('port', port);

// Create a server and pass the express app to it
const server = http.createServer(App);
server.listen(port, () => {
    console.log('Listening on port ' + port)
  })

