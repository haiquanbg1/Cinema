'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['showtimes']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('showtimes', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('showtimes', null, {})
  }
};