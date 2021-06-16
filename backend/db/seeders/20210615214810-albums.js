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
          title: 'Bad Boy photooooooos',
          description:"poooooop",
        },
        {
          userId: 1,
          title: 'lalalalallaa',
          description:"unicorns",
        },
        {
          userId: 2,
          title: 'peeeepeeeeee',
          description:"farts",
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
