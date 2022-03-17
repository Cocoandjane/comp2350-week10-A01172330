const {Sequelize, DataTypes} = require("sequelize");

const databaseConnectionString = include("/databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define("pet",
    {pet_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    web_user_id: {type: Sequelize.INTEGER, allowNull: false, foreignKey: true},
    name: {type: Sequelize.STRING, allowNULL: false},
    pet_type_id: {type: Sequelize.INTEGER, allowNull: false, foreignKey: true},
    },
    {tableName: "pet",
    timestamps: false,
    singular: "pet",
    plural: "pet"}
);

module.exports = petModel