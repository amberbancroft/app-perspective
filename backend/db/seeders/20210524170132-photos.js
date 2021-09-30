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
        title: 'Mushy Magical Mushroom',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/mae-black-BnNfv-gCsck-unsplash.jpg',
      },
      {
        userId: 1,
        title: 'Hay There',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1418835817666-45fa43c32666.jpeg',
      },
      {
        userId: 1,
        title: 'Enjoying a Fiction Wonder',
        imgUrl:'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1474366521946-c3d4b507abf2.jpeg',
      },
      {
        userId: 1,
        title: 'Pink on Pink',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/hao-wen-h95YoVRa2uA-unsplash.jpg',
      },
      {
        userId: 1,
        title: 'Desert Skyline',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/gautier-salles-uffQnKuJ-hc-unsplash.jpg',
      },
      {
        userId: 2,
        title: 'Mood light',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1486395130845-ec128138002e.jpeg',
      },
      {
        userId: 2,
        title: 'Mysterious Marsh',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1496639761547-0c59cf943f62.jpeg',
      },
      {
        userId: 2,
        title: 'Follow the Road',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1502088513349-3ff6482aa816.jpeg',
      },
      {
        userId: 2,
        title: 'Rope',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1506090817399-8b30f2aa0d4e.jpeg',
      },
      {
        userId: 2,
        title: 'Field of Flowers',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1517261200038-cc8143ca84bf.jpeg',
      },
      {
        userId: 3,
        title: 'Forest light',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1517594632980-535c0c33173d.jpeg',
      },
      {
        userId: 3,
        title: 'Streets',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1523251343397-9225e4cb6319.jpeg',
      },
      {
        userId: 3,
        title: 'Storm',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1523838315332-456a01b8e8a1.jpeg',
      },
      {
        userId: 3,
        title: 'Coffee Lover',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1541569863345-f97c6484a917.jpeg',
      },
      {
        userId: 3,
        title: 'Open for Business',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/photo-1599595344070-c456bea6ee98.jpeg',
      },
      {
        userId: 4,
        title: 'Sunset Beach',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/richard-de-ruijter-kHdCQQ7uYh4-unsplash.jpg',
      },
      {
        userId: 4,
        title: 'Palm Trees',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/robert-gomez-7i9owd6JD4c-unsplash.jpg',
      },
      {
        userId: 4,
        title: 'Hot Air',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/sebastian-huber-TaDUbNRtccQ-unsplash.jpg',
      },
      {
        userId: 4,
        title: 'Lanterns',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/vladyslav-tobolenko-doXpyFPVtVs-unsplash.jpg',
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
