'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['cinemas']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cinemas', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cinemas', null, {})
  }
};
