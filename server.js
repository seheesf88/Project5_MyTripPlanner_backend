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
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus:200
}

app.use(cors(corsOptions));


const planControllers = require('./controllers/planControllers');
const checklistControllers = require('./controllers/checklistControllers');


app.use('/api/v1/plans', planControllers);
app.use('/api/v1/checklists', checklistControllers);


app.listen(process.env.PORT || 9000, () => {
  console.log('I am working properly')
})
