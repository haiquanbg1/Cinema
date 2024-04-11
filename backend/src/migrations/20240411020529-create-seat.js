'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seats', {
      seat_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(5)
      },
      type: {
        type: Sequelize.STRING(20)
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rooms',
          key: 'room_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('seats');
  }
};