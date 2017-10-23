# yutrack
Repositorio de examen técnico yutrack

Each folder contains the corresponding code to his own name.

To avoid loading times when pulling/pushing the repo, all the folders are shipped without `./node_modules` folder


Requirements
------
+ NodeJs v8.6.0
+ Yarn v1.1.0
+ MongoDB


backend
------
`./backend$ yarn install`<br/>
`./backend$ yarn debug`<br/>

Launches the BackEnd on `port 3001`. Make sure you have `mongoDb` up and running, otherwise the backend will crash.
You can find configuration for connection under the App class in `./app/main.ts`:

```javascript
this.mongoose = mongoose.connect('mongodb://localhost:27017/test', {
 useMongoClient: true 
});
```
Just edit the mongodb string and you should be good to go :)

web
------
`./web$ yarn install`<br/>
`./web$ yarn start`<br/>

This starts a development server for serving a React web app. It uses a 'proxy' option defined into `package.json`
to route all the requests to `http://localhost:3001`, which turns out to be the backend.

movil
------
`./movil$ yarn install`<br/>
`./movil$ yarn run android`<br/>

This will run an expo packager server. You can test the app by downloading the `expo` app and scanning the QR code
that appears in the terminal. You can modify the endpoint url by editing `./src/mainPage.js`

```javascript
const api_url = "http://192.168.0.23:3001"; // Your LAN development machine
//const api_url = "http://10.0.2.2:3001"; // dev machine loopback iface when using android emulator
```

