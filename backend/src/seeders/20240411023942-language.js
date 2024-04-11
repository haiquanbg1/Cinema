'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['languages']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('languages', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('languages', null, {})
  }
};
