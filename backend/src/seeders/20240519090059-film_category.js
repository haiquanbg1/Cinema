'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['film_category']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('film_category', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('film_category', null, {})
  }
};