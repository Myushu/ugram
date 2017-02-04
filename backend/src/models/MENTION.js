/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MENTION', {
    ID_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PICTURE',
        key: 'ID_PICTURE'
      }
    }
  }, {
    tableName: 'MENTION',
    timestamps : false
  });
};
