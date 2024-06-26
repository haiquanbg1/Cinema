'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(128)
      },
      description: {
        type: Sequelize.TEXT
      },
      release_date: {
        type: Sequelize.DATEONLY
      },
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        }
      },
      director: {
        type: Sequelize.STRING(100)
      },
      actor: {
        type: Sequelize.STRING(100)
      },
      length: {
        type: Sequelize.INTEGER
      },
      classify_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'classifies',
          key: 'id'
        }
      },
      image: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};