'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [{
      event_id: 5,
      name: 'rockfest',
      date: new Date('2024-07-09'),
      available_start_time: new Date('2024-07-09T18:00:00Z'),
      end_time: new Date('2024-07-09T21:00:00Z')
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {})
  }
};
