import joi from 'joi';
import express from 'express';
import dotenv from 'dotenv';
import citizens from '../db/citizens';



export default class CitizensController {

    static async getAllAllowed(req, res) {
        const newGreaterData = citizens.filter((citizen) => citizen.age >= 18);

        return res.json({
            message: 'Citizens allowed to drink',
            countDrinker: newGreaterData.length,
            newGreaterData
        })
    }

    static async getAllNotAllowed(req, res) {
        const newLessData = citizens.filter((citizen) => citizen.age < 18);

        return res.json({
            message: 'Citizens not allowed to drink',
            countNotDrinker: newLessData.length,
            newLessData
        })
    }

    static async create(req, res){

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

    }

    static async update(req, res){

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
 
  citizen.name = req.body.name,
  citizen.category = req.body.category,
  citizen.active = req.body.active,
  citizen.end = req.body.end,
  citizen.age = req.body.age

  
  res.json({ message:'citizen updated sucessfull',citizen})



    }

static async delete(res, req){
    
    const citizen = citizens.find(c => c.id === parseInt(req.params.id))
  if(!citizen) res.status(404).json({message:'No citizen with that ID'})

  const index = citizens.indexOf(citizen);
  citizens.splice(index, 1);

  res.json({message: 'citizen deleted sucessful'})

}





}