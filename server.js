const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');
const session    = require('express-session');

require('./db/db');

app.use(session({
  secret: 'nyamissi',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: ['http://localhost:3000', 'https://localhost:3000', 'https://my-tripplanner.herokuapp.com'],
  credentials: true,
  optionsSuccessStatus:200
}

//HEROKU
// origin: 'http://localhost:3000',  ===> origin: ['http://localhost:3000'],
app.use(cors(corsOptions));

const authControllers = require('./controllers/authControllers');
const userControllers = require('./controllers/userControllers');
const planControllers = require('./controllers/planControllers');
const itemListControllers = require('./controllers/itemListControllers');
const itineraryControllers = require('./controllers/itineraryControllers');


app.use('/api/v1/auth', authControllers);
app.use('/api/v1/users', userControllers);
app.use('/api/v1/plans', planControllers);
app.use('/api/v1/itemlists', itemListControllers);
app.use('/api/v1/itinerary', itineraryControllers);


app.listen(process.env.PORT || 9000, () => {
  console.log('I am working properly')
})
