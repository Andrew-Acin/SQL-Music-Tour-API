'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      band_id: 1,
      name: 'radio head',
      genre: 'rock',
      available_start_time: new Date('2024-07-09T18:00:00Z'),
      end_time: new Date('2024-07-09T19:00:00Z')
    },
    {
      band_id: 2,
      name: 'nirvana',
      genre: 'grunge',
      available_start_time: new Date('2024-09-07T19:00:00Z'),
      end_time: new Date('2024-07-09T20:00:00Z')
    },
    {
      band_id: 3,
      name: 'metalica',
      genre: 'rock',
      available_start_time: new Date('2024-07-09T20:00:00'),
      end_time: new Date('2024-07-09T21:00:00Z')
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};
