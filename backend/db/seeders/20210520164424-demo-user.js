'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user1.io',
        username: 'Bojack Horsman',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/bojack.jpeg',
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: 'demo@user2.io',
        username: 'Levi Ackerman',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/levi-ackerman.png',
        hashedPassword: bcrypt.hashSync('password2'),
      },
      {
        email: 'demo@user3.io',
        username: 'Patrick',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/patrick.jpeg',
        hashedPassword: bcrypt.hashSync('password3'),
      },
      {
        email: 'demo@user4.io',
        username: 'Bob Ross',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/bob.jpeg',
        hashedPassword: bcrypt.hashSync('password4'),
      },
      {
        email: 'demo@user5.io',
        username: 'Brita Perry',
        imgUrl: 'https://app-perspective-final.s3.us-west-1.amazonaws.com/brita.jpeg',
        hashedPassword: bcrypt.hashSync('password5'),
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