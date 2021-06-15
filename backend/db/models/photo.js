'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(30)
    },
    imgUrl: {
      type: DataTypes.STRING(300)
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId' });

    
    const columnMapping = {
      through: 'Joins', // This is the model name referencing the
      otherKey: 'albumId',
      foreignKey: 'photoId'
    }
    Photo.belongsToMany(models.Album, columnMapping);
  };

  Photo.uploadImage = async function (userId, title, imgUrl) {
    const photo = await Photo.create({
      userId,
      title,
      imgUrl,
    });
    return photo;
  };

  return Photo;
};