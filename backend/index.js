const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT||3001;

const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const categoriesRouter = require('./routes/categories');
const movieratingsRouter = require('./routes/movieratings');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.options('/*',(req, res, next) => res.send());

app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/genres', categoriesRouter);
app.use('/movieratings', movieratingsRouter);

app.listen(PORT, ()=> console.log('server running on PORT '+PORT));