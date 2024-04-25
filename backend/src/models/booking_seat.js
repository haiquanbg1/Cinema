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
      booking_seat.belongsTo(models.Booking, {
        foreignKey: 'booking_id',

      });
      booking_seat.belongsTo(models.Seat, {
        foreignKey: 'seat_id',

      });
    }
  }
  booking_seat.init({
    booking_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Booking',
        key: 'id'
      }
    },
    seat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Seat',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'booking_seat',
    tableName: 'nooking_seat'
  });
  return booking_seat;
};