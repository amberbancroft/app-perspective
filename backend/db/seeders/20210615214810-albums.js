'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      await queryInterface.bulkInsert('Albums', [
        {
          userId: 1,
          title: 'The greatest album',
          description:'not for the faint of heart',
        },
        {
          userId: 1,
          title: 'lalalalallaa',
          description:'nature awaits',
        },
        {
          userId: 2,
          title: 'worms',
          description:'for the animals',
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
