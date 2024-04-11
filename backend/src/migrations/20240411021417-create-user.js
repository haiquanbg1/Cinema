'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(50)
      },
      lastName: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(100)
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      password: {
        type: Sequelize.STRING(100)
      },
      phone: {
        type: Sequelize.CHAR(10)
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'city_id'
        }
      },
      refresh_token: {
        type: Sequelize.STRING
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      },
      rank_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ranks',
          key: 'rank_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};