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
      return queryInterface.bulkInsert('Photos', [
      {
        userId: 1,
        title: 'Long Roads',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1523251343397-9225e4cb6319.jpeg',
      },
      {
        userId: 1,
        title: 'Hay there',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1418835817666-45fa43c32666.jpeg',
      },
      {
        userId: 1,
        title: 'a sensational summer day',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1517261200038-cc8143ca84bf.jpeg',
      },
      {
        userId: 1,
        title: 'Clouds',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1502088513349-3ff6482aa816.jpeg',
      },
      {
        userId: 1,
        title: 'let there be light',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1486395130845-ec128138002e.jpeg',
      },
      {
        userId: 2,
        title: 'Sunset to remember',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1594606741507-ac1cda19571f.jpeg',
      },
      {
        userId: 2,
        title: 'winter magic',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1549628884-dfa104cc19ea.jpeg',
      },
      {
        userId: 2,
        title: 'Trees and stuff',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1517594632980-535c0c33173d.jpeg',
      },
      {
        userId: 2,
        title: 'Open',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1599595344070-c456bea6ee98.jpeg',
      },
      {
        userId: 2,
        title: 'hills a plenty',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1496639761547-0c59cf943f62.jpeg',
      },
      {
        userId: 3,
        title: 'Midsomner 2.0',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1562572766-953b8ab55ae1.jpeg',
      },
      {
        userId: 3,
        title: 'Texture',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1523838315332-456a01b8e8a1.jpeg',
      },
      {
        userId: 3,
        title: 'Rope',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1506090817399-8b30f2aa0d4e.jpeg',
      },
      {
        userId: 3,
        title: 'Caffine Addict',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1541569863345-f97c6484a917.jpeg',
      },
      {
        userId: 3,
        title: 'Lazy Sunday',
        imgUrl: 'https://app-perspective.s3-us-west-1.amazonaws.com/photo-1474366521946-c3d4b507abf2.jpeg',
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
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
