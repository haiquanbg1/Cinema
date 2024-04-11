'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    }
  }
  Cinema.init({
    cinema_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING(100)
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'city_id'
      }
    },
    phone: {
      type: DataTypes.CHAR(11)
    },
    email: {
      type: DataTypes.STRING(50)
    },
    details: {
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING(100)
    }
  }, {
    sequelize,
    modelName: 'Cinema',
  });
  return Cinema;
};