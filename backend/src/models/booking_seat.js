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
        model: 'bookings',
        key: 'booking_id'
      }
    },
    seat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'seats',
        key: 'seat_id'
      }
    },
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
  }, {
    sequelize,
    modelName: 'booking_seat',
  });
  return booking_seat;
};