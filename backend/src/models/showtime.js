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
      Showtime.belongsTo(models.Cinema, {
        foreignKey: 'cinema_id',
      });
      Showtime.belongsTo(models.Film, {
        foreignKey: 'film_id',

      });
      Showtime.hasMany(models.Booking, {
        foreignKey: 'showtime_id',
      })
    }
  }
  Showtime.init({
    film_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Film',
        key: 'id'
      }
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'cinemas',
          key: 'id'
        }
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
    modelName: 'Showtime',
    tableName: 'showtimes',
  });
  return Showtime;
};
