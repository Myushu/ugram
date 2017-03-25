/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NOTIFICATION', {
    ID_NOTIFICATION: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MESSAGE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'PICTURE',
        key: 'ID_PICTURE'
      }
    },
    ID_OWNER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    }
  }, {
    tableName: 'NOTIFICATION',
    timestamps : false
  });
};
