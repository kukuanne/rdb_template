import joi from 'joi'
import express from 'express'
import dotenv from 'dotenv'



const app = express();

app.use(express.json())

dotenv.config();


app.get('/', function(req, res) {
  res.json({message: 'hello anne'});
});
     
     
    let citizens = [
  {
    id: 1,
    'name': 'anne marie',
    'category':'singer ',
    'active':'1935',
    'end':'1977',
    'age':'20'
      },
  {
    id: 2,
    'name': 'diane',
    'category':'singer ',
    'active':'1946',
    'end':'1991',
    'age':'17'
  },
  {
    id: 3,
    'name': 'tylor swift',
    'category':'dancer ',
    'active':'1957',
    'end':'2018',
    'age':'49'
  },
  {
    id: 4,
    'name': 'levis',
    'category':'sports',
    'active':'1976',
    'end':'2018',
    'age':'12'
  },
  {
    id: 5,
    'name': 'tiger ben',
    'category':'actor ',
    'active':'2000',
    'end':'2018',
    'age':'45'
  }  
];

// const allowedToDrinkArray = Citizen.filter(function (Ctz) { return Ctz.age>=18 } );

const newGreaterData = citizens.filter((citizen) => citizen.age >= 18);
const newLessData = citizens.filter((citizen) => citizen.age < 18);

// console.log(newArray);
// app.get('/', function(req, res) {
//   res.json({Message:'citizens who are allowed to Drink'});
// });


app.get('/api/drinks/allowed', function(req, res) {
  res.json({
    message: 'Citizens allowed to drink',
    countDrinker: newGreaterData.length,
    newGreaterData
  });
});

app.get('/api/drinks/not-allowed', function(req, res) {
  res.json({
    message: 'Citizens not allowed to drink',
    countNotDrinker: newLessData.length,
    newLessData
  });
});


app.post('/api/citizens/create', (req, res) => {
  const schema = joi.object( {
    // id:joi.string().min(1).max(2).required(),
    name:joi.string().min(3).required(),
    category:joi.string().min(3).required(),
    active: joi.number().integer().min(1920).max(2021),
    end: joi.number().integer().min(1920).max(2021),
    age: joi.number().required()
  })


  const validation = schema.validate(req.body);
  
  if(validation.error){
    res.status(400).send(validation.error.details[0].message);
    return;
  }
  


  // res.json({result});
  



  const citizen = {
     id: citizens.length +1,
     name: req.body.name,
     category: req.body.category,
     active: req.body.active,
     end: req.body.end,
     age: req.body.age
  };


  citizens.push(citizen);
  res.json({message:'Citizen created sucessful', citizen})


});

app.put('/api/citizens/update/:id',(req, res) =>{

  const citizen = citizens.find(c => c.id === parseInt(req.params.id))
  if(!citizen) res.status(404).json({message:'No citizen with that ID'})

  
  const schema = joi.object( {
    // id:joi.string().min(1).max(2).required(),
    name:joi.string().min(3).required(),
    category:joi.string().min(3).required(),
    active: joi.number().integer().min(1920).max(2021),
    end: joi.number().integer().min(1920).max(2021),
    age: joi.number().required()

  })
  const validation = schema.validate(req.body);
  if(validation.error){
    res.status(400).send(validation.error.details[0].message);
    return;
  }
 
  citizen.name = req.body.name;
  citizen.category = req.body.category;
  citizen.active = req.body.active;
  citizen.end = req.body.end;
  citizen.age = req.body.age;

  
  res.json({ message:'citizen updated sucessfull',citizen})


});





  
  // return res.status(200).json({
  //     status:200,
  //     message:'Citizen account updated',
  //     citizens: {
  //       name: updateUserQuery.rows[0].name,
  //       category: updateUserQuery.rows[0].category,
  //       active: updateUserQuery.rows[0].active,
  //       end: updateUserQuery.rows[0].end,
  //       age: updateUserQuery.rows[0].age,
        
  //     }
  //   }); 
    // joi.validate(citizen, schema);










// const age = [];
// let allowToDrink=citizen.map(function(value,index
//   )){
//       for(let i = 0; i<age.length;i++){
//       if(age [ i] >= 18){
//       allowToDrink.push(age[i]);

//     }

//     console.log(allowToDrink);
//   }

// }

app.listen(process.env.PORT,() => console.log(`Server running on port ${process.env.PORT}`));

// app.get('/', function(req, res) {
//     res.send('hello anne');
// });
// app.listen(5000), function() {
//     console.log('listerning on port 5000....');

// }
 
