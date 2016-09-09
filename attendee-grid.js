var fs = require('fs');
var seedrandom = require('seedrandom');


// Dimensions of the BINGO card square though not using 5 makes you a
// MONSTER
var squareSize = 5;
var squareCenter = Math.floor(squareSize / 2);


// TODO(eli): Make it so we can read from a database,
// so that we can show xoxo attendees now that our code is
// open source
var followers = JSON.parse(fs.readFileSync('static/public/twitter_lists/folks.json', 'utf8'));
var blacklist = [];
// TODO(eli): Grab attendees from a sqlite database
var attendeesImages = JSON.parse(fs.readFileSync('static/public/twitter_lists/attendees.json', 'utf8'));
var attendees = Object.keys(attendeesImages);

var bingoFriendHandles = function(username) {
    var is_attendee = attendees.indexOf(username) !== -1;
    var handles = is_attendee ? attendees.slice(0) : followers.slice(0);
    // remove username from handles
    return handles.filter(function(i) {
        return i !== username;
    });
};

// adapted from underscore
var shuffle = function(set, rng) {
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = Math.floor(rng() * index);
        if (rand !== index) {
            shuffled[index] = shuffled[rand];
        }
        shuffled[rand] = set[index];
    }
    return shuffled;
};


var attendeeListForUsername = function(username) {
    // ensure we don't show the user herself
    var handles = bingoFriendHandles(username);

    // seed the random number generator so every user always sees the same
    // card.
    var rng = seedrandom(username);
    return shuffle(handles, rng);
};


var arrayIndexFromCoords = function(row, column, handles, handlesSoFar) {
    var index = squareSize * row + column;
    var handle = handles[handlesSoFar];
    if (blacklist.indexOf(handle) === -1) {
        return index;
    }

    var lastGridIndex = squareSize * squareSize;
    // if the intended bingo person is on the blacklist, remove them from
    // the grid and fill in someone new.
    for (var i = lastGridIndex; i < handles.length; i++) {
        handle = handles[i];
        if (blacklist.indexOf(handle) === -1 && handlesSoFar.indexOf(handle) === -1) {
            return index;
        }
    }
};

var userForLocation = function(
    row, column, handles, username, handlesSoFar) {
    // Set center avatar to the person viewing
    if (row === squareCenter && column === squareCenter) {
        return username;
    }
    return handles[arrayIndexFromCoords(row, column, handles, handlesSoFar)];
};

var avatarFor = function(handle, username) {
    if (handle === username) {
        return attendeesImages[username];
    }
    return 'avatars/' + handle + '.png';
};


var attendeeGrid = function(username) {
    var handles = attendeeListForUsername(username);
    var card = [];
    // handles so far is a list of all the handles the user has
    // seen so far.
    var bingoRow, handle, handlesSoFar = null;
    for (var row = 0; row < squareSize; row++) {
        bingoRow = [];
        for (var column = 0; column < squareSize; column++) {
            handle = userForLocation(
                row, column, handles, username,
                handlesSoFar);
            bingoRow.push({
                'name': '@' + handle,
                'link': 'http://twitter.com/' + handle,
                'image': avatarFor(handle, username)
            });
        }
        card.push(bingoRow);
    }
    return card;
};


module.exports = attendeeGrid;
