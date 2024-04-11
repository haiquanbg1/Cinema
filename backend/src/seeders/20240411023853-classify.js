'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['classifies']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classifies', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classifies', null, {})
  }
};
