'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Showtime.init({
    showtime_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    film_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'films',
        key: 'film_id'
      }
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cinemas',
        key: 'cinema_id'
      }
    },
    time: {
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'showtimes',
  });
  return Showtime;
};