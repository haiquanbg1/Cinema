'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('./data.json')['categories']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
