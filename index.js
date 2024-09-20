const express = require('express');
const app = express();
const path = require('path');

  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, 'src', 'public')));

  // Route to serve the main HTML file
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
  });


// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});
app.get('/api/whoami',(req,res)=>{
    res.send({ipaddress: req.headers['x-forwarded-for'], language:req.headers["accept-language"],software:req.headers["user-agent"] })
})

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
