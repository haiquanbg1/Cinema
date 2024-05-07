'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cinema.belongsTo(models.City, {
        foreignKey: 'city_id',

      });
      Cinema.hasMany(models.Room, {
        foreignKey: 'cinema_id',
      });
    }
  }
  Cinema.init({
    address: {
      type: DataTypes.STRING(100)
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "cities",
          key: "id"
        }
      }
    },
    phone: {
      type: DataTypes.CHAR(11)
    },
    email: {
      type: DataTypes.STRING(50)
    },
    details: {
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING(100)
    },
  }, {
    sequelize,
    modelName: "Cinema",
    tableName: "cinemas",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Cinema;
};