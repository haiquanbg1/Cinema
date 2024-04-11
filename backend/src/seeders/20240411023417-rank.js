'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['ranks']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ranks', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ranks', null, {})
  }
};
