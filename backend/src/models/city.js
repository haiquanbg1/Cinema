'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.hasMany(models.Cinema, {
        foreignKey: 'city_id',

      });
      City.hasMany(models.User, {
        foreignKey: 'city_id',

      });
    }
  }
  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    city: DataTypes.STRING(50),
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'cities',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return City;
};