'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(30)
    },
    description: {
      type: DataTypes.STRING(300)
    }
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'Join', // This is the model name referencing the
      otherKey: 'photoId',
      foreignKey: 'albumId'
    }
    Album.belongsToMany(models.Photo, columnMapping);
    Album.hasMany(models.Join, { foreignKey: 'albumId', onDelete: 'CASCADE', hooks: true });
  };
  return Album;
};