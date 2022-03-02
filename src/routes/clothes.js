'use strict'

const express = require('express');
const {clothesCollection} = require('../models/index.js');
const router = express.Router();

router.post('/clothes',addClothes);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getClothesById);
router.put('/clothes/:id',updateClothes);
router.delete('/clothes/:id',deleteClothes);

async function addClothes(req, res) {
    let newClothes = req.body;
    let clothes = await clothesCollection.createRecord(newClothes);
    res.status(201).json(clothes);
}

async function getClothes(req, res) {
    let clothesObject = await clothesCollection.readRecord();
    res.status(200).json(clothesObject);
}

async function getClothesById(req,res) {
    let getId = parseInt(req.params.id);
    let clothesId = await clothesCollection.readRecord(getId);
    res.status(200).json(clothesId);
}

async function updateClothes(req,res) {
    let body = req.body;
    let bodyId =req.params.id;
    let clothesUpdate = await clothesCollection.updateRecord(body,bodyId);
    res.status(201).json(clothesUpdate);
}

async function deleteClothes(req,res) {
    let deleteId = parseInt(req.params.id);
    let deleteClothes =await clothesCollection.deleteRecord(deleteId);
    res.status(204).json(deleteClothes);
}


module.exports = router;