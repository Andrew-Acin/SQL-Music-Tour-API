'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      band_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        allowNull: false,
        type: Sequelize.TIME
      },
      meet_end_time: {
        allowNull: false,
        type: Sequelize.TIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};