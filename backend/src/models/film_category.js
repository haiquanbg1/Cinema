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
      // define association here
    }
  }
  film_category.init({
    film_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Films',
        key: 'film_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    modelName: 'film_category',
  });
  return film_category;
};