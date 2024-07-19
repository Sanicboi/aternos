const express = require('express');

const app = express();

app.get('/', (req, res) => {

    console.log(req.ip, req.ips);
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

app.listen(8080);