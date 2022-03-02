'use strict'

const express = require('express');
const {foodCollection } = require('../models/index.js');
const router = express.Router();

router.post('/food', addFood);
router.get('/food', getFood);
router.get('/food/:id', getFoodById);
router.put('/food/:id', updateFood);
router.delete('/food/:id',deleteFood);

async function addFood(req, res) {
    let newFood = req.body;
    let food = await foodCollection.createRecord(newFood);
    res.status(201).json(food);
}

async function getFood(req, res) {
    let foodObject = await foodCollection.readRecord();
    res.status(200).json(foodObject);
}

async function getFoodById(req,res) {
    let getId = parseInt(req.params.id);
    let foodId = await foodCollection.readRecord(getId)
    res.status(200).json(foodId);
}

async function updateFood(req,res) {
    let body = req.body;
    let bodyId =req.params.id;
    let foodUpdate = await FoodCollection.updateRecord(body,bodyId);
    res.status(201).json(foodUpdate);
}

async function deleteFood(req,res) {
        let deletedId = parseInt(req.params.id);
        let deletedFood = await FoodCollection.removeRecord(deletedId);
        res.status(204).json(deletedFood);
    }



module.exports = router;