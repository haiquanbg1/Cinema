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
      // define association here
    }
  }
  Room.init({
    room_id: {
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
        model: 'cinemas',
        key: 'cinema_id'
      }
    }
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return Room;
};