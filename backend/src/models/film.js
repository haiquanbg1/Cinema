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
      Film.belongsTo(models.Classify, {
        foreignKey: 'classify_id',

      });
      Film.belongsTo(models.Language, {
        foreignKey: 'language_id',

      });
      Film.hasMany(models.Showtime, {
        foreignKey: 'film_id',

      });
      Film.hasMany(models.film_category, {
        foreignKey: 'film_id',

      });
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
        model: 'Language',
        key: 'id'
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
        model: 'Classify',
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Film',
    tableName: 'films'
  });
  return Film;
};