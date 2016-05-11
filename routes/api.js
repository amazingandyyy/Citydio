var express = require('express');
var router = express.Router();
var Base64 = require('js-base64').Base64;
var request = require('request');


/* GET users listing. */
router.get('/getaddress/:latitude/:longitude', function(req, res) {
    var latitude = req.params.latitude;
    var longitude = req.params.longitude;

    var API_KEY = 'JOrsCaGbL3pfK0tjbP8i9OyQOWG7hfm3';
    var SECRET = 'h8YScAcGeJjY7aYC';
    var oauthUrl = 'http://api.pitneybowes.com/oauth/token'
    var key = Base64.encode(`${API_KEY}:${SECRET}`);

    request.post({
    url: oauthUrl,
    headers: {
        'Authorization': `Basic ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
}, (err, response, body) => {
    var accessToken = JSON.parse(body).access_token;
    var apiUrl = `https://api.pitneybowes.com/location-intelligence/geoenhance/v1/address/bylocation?latitude=${latitude}&longitude=${longitude}&searchRadius=2640&searchRadiusUnit=feet`

    request.get({
        url: apiUrl,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }, (err, response, body)=>{
        console.log("body: ", JSON.stringify(JSON.parse(body), null,2));
        res.send()
    })
})


    res.send()
});

module.exports = router;
