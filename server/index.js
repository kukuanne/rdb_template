import joi from 'joi';
import express from 'express';
import dotenv from 'dotenv';
import CitizensController from './controllers/CitizensController';



const app = express();
app.use(express.json())
dotenv.config();



     
     
    





app.get('/api/drinks/allowed', CitizensController.getAllAllowed);
app.get('/api/drinks/not-allowed', CitizensController.getAllNotAllowed); 
app.post('/api/citizens/create', CitizensController.create); 
app.put('/api/citizens/update/:id', CitizensController.update); 
app.delete('/api/citizens/delete/:id',CitizensController.delete);
app.listen(process.env.PORT,() => console.log(`Server running on port ${process.env.PORT}`));


 
