'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Joins', [
        {
          photoId: 1,
          albumId: 1,
        },
        {
          photoId: 2,
          albumId: 1,
        },
        {
          photoId: 3,
          albumId: 1,
        },
        {
          photoId: 4,
          albumId: 1,
        },
        {
          photoId: 5,
          albumId: 1,
        },
        {
          photoId: 3,
          albumId: 2,
        },
        {
          photoId: 4,
          albumId: 2,
        },
        {
          photoId: 5,
          albumId: 2,
        },
        {
          photoId: 6,
          albumId: 1,
        },
        {
          photoId: 7,
          albumId: 1,
        },
        {
          photoId: 8,
          albumId: 1,
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Albums', null, {});
  }
};
