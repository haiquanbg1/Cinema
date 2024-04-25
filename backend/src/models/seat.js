'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seat.hasMany(models.booking_seat, {
        foreignKey: 'seat_id',

      });
      Seat.belongsTo(models.Room, {
        foreignKey: 'room_id',

      });
    }
  }
  Seat.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(5)
    },
    type: {
      type: DataTypes.STRING(20)
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Room',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Seat',
    tableName: 'seats'
  });
  return Seat;
};