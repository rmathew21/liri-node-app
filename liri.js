require('dotenv').config();

const Spotify = require('node-spotify-api');

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

spotify.search({
    type: 'track',
    query: 'All the Small Things',
}, function(err, data) {
    if (err) {
        return console.log('Error occured: ' + err);
    }
    console.log(data);
});