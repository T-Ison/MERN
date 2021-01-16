const express = require('express');

// create an application
const app = express();

// allows us to see the incoming data each request
app.use(express.json()); // IMPORTANT! add this towards top 

// path
app.get('/',(request, response) => {
    console.log(request);
    // response.send('Hello');
    response.json({
        hello: 'world'
    })
});

//handle a post request...... req = request  res = response
app.post('/',(req, res) => {
    console.log(req.body); // trying to see the incoming data
    // we always need to respond with something
    res.json({
        posted: true
    });
})

// ability to receive requests
app.listen(8000, () => console.log('listening on port 8000'));