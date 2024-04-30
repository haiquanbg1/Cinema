'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      film_category.belongsTo(models.Film, {
        foreignKey: 'id',

      });
      film_category.belongsTo(models.Category, {
        foreignKey: 'id',

      });
    }
  }
  film_category.init({
    film_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Film',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
  }, {
    sequelize,
    modelName: 'film_category',
    tableName: 'film_category'
  });
  return film_category;
};