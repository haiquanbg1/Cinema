'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Language.hasMany(models.Film, {
        foreignKey: 'language_id',

      });
    }
  }
  Language.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(20)
    },
  }, {
    sequelize,
    modelName: 'Language',
    tableName: 'languages'
  });
  return Language;
};