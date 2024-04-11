'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_seat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bookings',
          key: 'booking_id'
        }
      },
      seat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'seat_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_seat');
  }
};