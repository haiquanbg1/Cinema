'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['films']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('films', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('films', null, {})
  }
};