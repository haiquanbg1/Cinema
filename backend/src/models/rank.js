'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rank.hasMany(models.User, {
        foreignKey: 'rank_id',

      });
    }
  }
  Rank.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(20)
    },
    money: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Rank',
    tableName: 'ranks',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Rank;
};