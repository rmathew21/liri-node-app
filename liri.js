// hiding keys
require('dotenv').config();

const Spotify = require('node-spotify-api');

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

// const fs = require('fs');



// Liri Commands

switch (command) {
    case "search-songs":
    searchSongs();
    break;
    case "search-concerts":
    searchConcerts();
    break;
    case "search-movies":
    searchMovies();
    break;
    case "feeling-lucky":
    feelingLucky();
    break;



};

// command 1 searchSongs
// need artist, song name, preview link, album
function searchSongs(songName) {
    const songName = process.argv[3];
    
    spotify.search({
        type: 'track',
        query: songRequest,
    }, function(err, data) {
        if (err) {
            return console.log('Error occured: ' + err);
        }
       // console.log(data);
       const songData = data.tracks.items;
       console.log('Artist: ' + songData[0].artists[0].name);
       console.log('Song Name: ' + songData[0].name);
       console.log('URL: ' + songData[0].href);
       console.log('Album: ' + songData[0].album.name);
    });
}