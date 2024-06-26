'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['seats']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seats', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seats', null, {})
  }
};
