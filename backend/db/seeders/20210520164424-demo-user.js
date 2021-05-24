'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user1.io',
        username: 'Bojack Horsman',
        imgUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F02%2Fbjh-still-26.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user2.io',
        username: 'Levi Ackerman',
        imgUrl: 'https://animeandgameembroidery.com/wp-content/uploads/2021/02/levi-ackerman-MIN-COLOR.png',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user3.io',
        username: 'Patrick',
        imgUrl: 'https://img1.looper.com/img/gallery/patrick-star-tv-series-release-date-plot-and-how-to-watch-what-we-know-so-far/intro-1614882322.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user4.io',
        username: 'Bob Ross',
        imgUrl: 'https://yt3.ggpht.com/ytc/AAUvwnhkZjfj3AhZNOvbxzIzVLTKZZHGLAlIHVstuYx1=s900-c-k-c0x00ffffff-no-rj',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user5.io',
        username: 'Brita Perry',
        imgUrl: 'https://i.pinimg.com/originals/7c/50/df/7c50df63c292908dedbfc0732097bdb9.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Bojack Horsman', 'Levi Ackerman', 'Patrick', 'Bob Ross', 'Brita Perry'] }
    }, {});
  }
};