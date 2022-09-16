const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/meroRecipe');
const path = require('path')
const cors = require('cors')

const UserRoute = require('./routes/UserRoute');
const recipeRoute = require('./routes/recipeRoute');
const categoryRoute = require('./routes/categoryRoute');


const publicDir = path.join(__dirname, 'public');

const app = express();
app.use(express.static(publicDir))

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(UserRoute)
app.use(recipeRoute)
app.use(categoryRoute)


app.listen(90);