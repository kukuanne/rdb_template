import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();


app.get('/', function(req, res) {
       res.send('hello anne');
     });

app.listen(process.env.PORT,() => console.log(`Server running on port ${process.env.PORT}`));

// app.get('/', function(req, res) {
//     res.send('hello anne');
// });
// app.listen(5000), function() {
//     console.log('listerning on port 5000....');

// }
 
