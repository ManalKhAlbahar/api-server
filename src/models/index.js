'use strict';
const {Sequelize,DataTypes} = require('sequelize');
const food = require('./food.js');
const clothes = require('./clothes.js');
const collection = require('./collection-class.js');

require('dotenv').config();


const myPOSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL ;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }:{};

  let sequelize = new Sequelize(myPOSTGRES_URL, sequelizeOptions);
  let foodModel = food(sequelize, DataTypes);
  let clothesModel = clothes(sequelize, DataTypes);

  let foodCollection = new collection(foodModel);
  let clothesCollection = new collection(clothesModel);


  module.exports = {
    db: sequelize, 
    foodCollection : foodCollection ,
    clothesCollection: clothesCollection
}