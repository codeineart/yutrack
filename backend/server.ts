import App from './app/main';
import * as http from 'http'; // node http module

const port = 3001;

App.set('port', port);

//create a server and pass our Express app to it.
const server = http.createServer(App);
server.listen(port, () => {
    console.log('Listening on port ' + port)
  })

