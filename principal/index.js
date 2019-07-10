const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// importing routes
const indexRoutes = require('./routes/routes');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`corriendo en: `+app.get('port'));
});
