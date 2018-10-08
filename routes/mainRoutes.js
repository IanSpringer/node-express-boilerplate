const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');
const key = process.env.API_KEY


router.get('/', (req, res) => {
  const untilElection = moment("20181106", "YYYYMMDD").startOf('hour').fromNow().replace('in', '');
  res.render('landing', {untilElection: untilElection})
})

router.get('/results', (req, res) => {
  const url = 'https://www.googleapis.com/civicinfo/v2/voterinfo?' + key;
  // axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?' + key)
  //   .then(function (response) {
  //     console.log('resulst are' + response)
  //     res.json(response)
  //   })
  //   .catch(function (error) {
  //     return (error);
  // });
  console.log(url)
  res.send('fuck')
})


module.exports = router;
