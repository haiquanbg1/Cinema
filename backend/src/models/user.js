'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.City, {
        foreignKey: 'city_id',

      });
      User.belongsTo(models.Rank, {
        foreignKey: 'rank_id',

      });
      User.hasMany(models.Booking, {
        foreignKey: 'user_id',

      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING(50)
    },
    lastName: {
      type: DataTypes.STRING(50)
    },
    email: {
      type: DataTypes.STRING(100)
    },
    gender: {
      type: DataTypes.BOOLEAN
    },
    password: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.CHAR(10)
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'City',
        key: 'id'
      }
    },
    refresh_token: {
      type: DataTypes.STRING
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    rank_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rank',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};