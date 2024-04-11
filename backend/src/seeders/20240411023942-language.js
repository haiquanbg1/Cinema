'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['languages']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Languages', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Languages', null, {})
  }
};
