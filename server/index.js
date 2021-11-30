import express from 'express'
const app = express();

const PORT = 5000;

app.listen(PORT,() => console.log(`Server running on port : http://localhost${PORT}`));

// app.get('/', function(req, res) {
//     res.send('hello anne');
// });
// app.listen(5000), function() {
//     console.log('listerning on port 5000....');

// }
 
