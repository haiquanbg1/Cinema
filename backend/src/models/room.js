'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Seat, {
        foreignKey: 'room_id',

      });
      Room.hasMany(models.Showtime, {
        foreignKey: 'room_id'
      })
      Room.belongsTo(models.Cinema, {
        foreignKey: 'cinema_id',

      });
    }
  }
  Room.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(10)
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cinema',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Room;
};