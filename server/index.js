import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();


app.get('/', function(req, res) {
       res.send('hello anne');
     });
const age = [20, 40, 30, 15, 18, 17];
const citizen =[
  {name: 'anne marie',category:'singer ', active:'1935', end:'1977'},
  {name: 'dadi fred',category:'singer ', active:'1946', end:'1991'},
  {name: 'tylor swift',category:'dancer ', active:'1957', end:'2018'},
  {name: 'yah levis',category:'sports ', active:'1976', end:'2018'},
  {name: 'tiger ben',category:'actor ', active:'2000', end:'2018'}  
];

let allowToDrink=[];
for(let i = 0; i<age.length;i++){
  if(age [ i] >= 40){
    allowToDrink.push(age[i]);
    console.log(allowToDrink);
  }

}

app.listen(process.env.PORT,() => console.log(`Server running on port ${process.env.PORT}`));

// app.get('/', function(req, res) {
//     res.send('hello anne');
// });
// app.listen(5000), function() {
//     console.log('listerning on port 5000....');

// }
 
