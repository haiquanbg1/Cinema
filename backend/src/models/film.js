'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Film.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(128)
    },
    description: {
      type: DataTypes.TEXT
    },
    release_date: {
      type: DataTypes.DATEONLY
    },
    language_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'languages',
        key: 'language_id'
      }
    },
    director: {
      type: DataTypes.STRING(100)
    },
    actor: {
      type: DataTypes.STRING(100)
    },
    length: {
      type: DataTypes.INTEGER
    },
    classify_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'classifies',
        key: 'classify_id'
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'films',
  });
  return Film;
};