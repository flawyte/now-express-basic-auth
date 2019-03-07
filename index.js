const express = require('express');
const basicAuth = require('express-basic-auth');

/*
 *
 */

const app = express();

app.use(basicAuth({
  challenge: true,
  realm: 'now-express-basic-auth',
  users: { 'guest': 'guest' },
  unauthorizedResponse: 'Restricted area. Please login (guest:guest).'
}));
app.use(express.static('src'));

/*
 *
 */

app.listen(4444, () => console.log('Listening on port 4444...'));
