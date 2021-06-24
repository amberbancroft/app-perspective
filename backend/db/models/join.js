'use strict';
module.exports = (sequelize, DataTypes) => {
  const Join = sequelize.define('Join', {
    photoId: {
      type: DataTypes.INTEGER,
    },
    albumId: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Join.associate = function(models) {
    Join.belongsTo(models.Album, { foreignKey: 'albumId'} );
  };
  return Join;
};