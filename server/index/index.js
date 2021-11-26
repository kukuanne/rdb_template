const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello anne');
});
app.listen(5000), () => console.log('listerning on port 5000....')