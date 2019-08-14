const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;

const attendeeGrid = require('./attendee-grid');

const port = process.env.PORT || 5000;

// Configure the Twitter strategy for use by Passport
passport.use(new Strategy({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callbackURL: `http://${process.env.URL}/login/twitter/return`
    }, (token, tokenSecret, profile, cb) => cb(null, profile)
  ));

// Configure Passport authenticated session persistence
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// Create a new Express application
const app = express();

// Configure view engine to render pug templates
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Use application-level middleware for common functionality, including
// logging, parsing, static asset serving, and session handling
app.use(express.static('static/public'));
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// TODO(rjs): Actually configure this and use proper store
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

// Initialize Passport and restore authentication state, if any, from the
// session
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', ({user}, res) => res.render('home', {
  user: user && user.username,
  attendeeGrid: attendeeGrid(user && user.username),
}));

app.get('/login/twitter',
  passport.authenticate('twitter'));

app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => res.redirect('/'));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// TODO(rjs): only expose these to authenticated users
app.get('/farewell', (req, res) => res.render('farewell'));
// TODO(rjs): allow users to remove themselves from the experiment
// TODO(rjs): add a success message here
app.get('/remove-me-from-the-experiment-plz', ({user}, res) => {
  console.log(`removing ${user && user.username}`)
  res.redirect('/');
});

app.listen(port);
