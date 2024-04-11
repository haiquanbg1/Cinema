'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking_seat.init({
    booking_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bookings',
        key: 'booking_id'
      }
    },
    seat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Seats',
        key: 'seat_id'
      }
    }
  }, {
    sequelize,
    modelName: 'booking_seat',
  });
  return booking_seat;
};