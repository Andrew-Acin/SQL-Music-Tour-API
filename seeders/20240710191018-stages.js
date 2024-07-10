'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [{
      stage_id: 99,
      stage_name: 'main stage'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage', null, {})
  }
};
