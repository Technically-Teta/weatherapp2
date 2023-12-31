const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

const PORT = 9000;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from my backend. This is my weather app part 2 '});
  });

// creates an endpoint for the route /api/weather
app.get('/api/weather', (req, res) => {
  res.json(dataWeather);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  