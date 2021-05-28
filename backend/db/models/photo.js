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
      type: DataTypes.STRING(255)
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
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