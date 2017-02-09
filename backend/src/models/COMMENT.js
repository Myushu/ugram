/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMMENT', {
    ID_COMMENT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.TIME,
      allowNull: false,
      references: {
        model: 'PICTURE',
        key: 'ID_PICTURE'
      }
    },
    DATE_CREATION: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'COMMENT',
    timestamps : false,
  });
};
