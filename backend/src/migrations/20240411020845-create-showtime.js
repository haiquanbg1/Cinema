'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Showtimes', {
      showtime_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Films',
          key: 'film_id'
        }
      },
      cinema_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cinemas',
          key: 'cinema_id'
        }
      },
      time: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Showtimes');
  }
};