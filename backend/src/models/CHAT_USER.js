/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHAT_USER', {
    ID_CHAT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CHAT',
        key: 'ID_CHAT'
      }
    },
    ID_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    }
  }, {
    tableName: 'CHAT_USER'
  });
};
