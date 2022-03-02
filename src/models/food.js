'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredient: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Food;
