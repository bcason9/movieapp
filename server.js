// set up express and port variables
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//production settings
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client'));
  }


app.use(routes);

//spin up backend server
app.listen(PORT, function() {
    console.log(`Server listening on PORT ${PORT}`)
})