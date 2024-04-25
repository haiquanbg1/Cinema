'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Showtime, {
        foreignKey: 'showtime_id',

      });
      Booking.hasMany(models.booking_seat, {
        foreignKey: 'booking_id',

      });
      Booking.belongsTo(models.User, {
        foreignKey: 'user_id',

      });
    }
  }
  Booking.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    showtime_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Showtime',
        key: 'showtime_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    pay: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings'
  });
  return Booking;
};