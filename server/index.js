import joi from 'joi';
import express from 'express';
import dotenv from 'dotenv';

import CitizensController from './controllers/citizensController';
import { sequelize } from './models';








const app = express();

app.use(express.json())
dotenv.config();



     
     
    
// async function main(){
//     await sequelize.sync()
  
//    }

//    main()





app.get('/api/citizens', CitizensController.getAllCitizens); 

app.get('/api/citizens/:uuid', CitizensController.getOneCitizen);
app.post('/api/citizens/create', CitizensController.create); 
app.put('/api/citizens/update/:id', CitizensController.update); 
app.delete('/api/citizens/delete/:id',CitizensController.delete);
app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT}`)
    await sequelize.authenticate()
     console.log('Database connected!')
});


 
