const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors());

app.get('/', (req, res) => res.json({ msg: 'hello rest api' }));
app.use('/users', require('./routes/api/user'));
app.use('/dummy', require('./routes/api/dummy'));
app.use('/crawl', require('./routes/api/crawl'));
app.use('/store', require('./routes/api/store'));

app.listen(app.get('port'), () => {
    console.log(`server started: listening on port : ${app.get('port')}`);
});
