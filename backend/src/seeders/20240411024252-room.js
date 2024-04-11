'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['rooms']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rooms', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rooms', null, {})
  }
};
