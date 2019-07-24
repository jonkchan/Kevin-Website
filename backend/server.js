const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const request = require('request');


const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database

router.get('/getprogress', (req,res) =>{
  const apiKey = req.headers.apikey
  var url = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/2xMUzTGbbXScLUA5za6V5rrz_8tJsC0bG3NVbt8Loy5yrgU?api_key="+apiKey
  request(url,function (error, response, body) {
    jsonBody = JSON.parse(body)
    results = ""
    if(jsonBody[0].queueType === 'RANKED_SOLO_5x5'){
      result = jsonBody[0]
    } else {
      result = jsonBody[1]
    }
    res.status(200).json({
      tier:result.tier,
      rank:result.rank,
      lp:result.leaguePoints
    })
  })
})

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
