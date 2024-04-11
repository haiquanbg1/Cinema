'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['cities']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {})
  }
};
