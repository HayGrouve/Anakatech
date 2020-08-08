const express = require('express'),
    fs = require('fs');
app = express();

// APP SETUP
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// DEFAULT ROUTE
app.get('/', (req, res) => {
    let rawdata = fs.readFileSync('./currencies.json');
    let data = JSON.parse(rawdata);
    res.render('index', {data: data});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
