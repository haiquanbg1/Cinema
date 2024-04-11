'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    booking_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    showtime_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'showtimes',
        key: 'showtime_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    pay: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'bookings',
  });
  return booking;
};