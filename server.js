const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const port = process.env.PORT || 8080;

app.use(cors());

// ejs middleware
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.render('index');
})

const server = app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
