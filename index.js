const express = require('express');
const app = express();

app.use(express.static('src'));

app.listen(4444, () => console.log('Listening on port 4444...'));