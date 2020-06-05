require('newrelic');
const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const parser = require('body-parser');
const path = require('path');
const port = 2112;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/media', createProxyMiddleware({ target: 'http://13.57.57.14:8000', changeOrigin: true}));

// const mediaProxy = createProxyMiddleware({
//   target: 'http://13.57.57.14:8000/',
//   changeOrigin: true,
// });

// const reviewProxy = createProxyMiddleware({
//   target: 'http://8.224.107.83:4200/', 
//   changeOrigin: true,
// });

// const announcementProxy = createProxyMiddleware({
//   target: '',
//   changeOrigin: true,
// });

// const bodyProxy = createProxyMiddleware({
//   target: 'http://ec2-3-23-61-151.us-east-2.compute.amazonaws.com:1992/',
//   changeOrigin: true,
// });

//app.use('/media', mediaProxy);

// app.use('/api/reviews/:id', reviewProxy);

// app.use('/getGame', announcementProxy);

// app.use('/mainbody', bodyProxy);

app.get('/loaderio-4b3718784fc1542b18ab3d2134f121fe/', (req, res) => {
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };  
  res.sendFile('/loaderio-4b3718784fc1542b18ab3d2134f121fe.txt', callback);
});


app.use(parser.json());

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });