import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import bodyParser from 'body-parser';

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD-B9yL_qkpkcmHC9G6zE2i-odPFNKoEP4'
});

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/getResults', function(req,res) {
  console.log('We have reached the getresults route')
  res.send([
    {name:'Shaf', tags:['favorite', 'guys-night']}, 
    {name:'MoMA', tags:['NYC', 'take Parents', 'cultural']},
    {name:'Central Park', tags:['NYC', 'take Parents', 'date night']}
  ]);
});

app.post('/addLocation', function(req, res) {
  console.log('req.body: ',req.body);

  googleMapsClient.geocode({
    address: 'Codesmith, ny'
  }, function(err, response) {
    if (!err) {
      console.log('google map result: ',response.json.results);
    }
  });

  res.json(req.body);
});

app.listen(port, function (error) {
  if(error) {
      console.log(error);
  } else {
      open(`http://localhost:${port}`)
  }
});