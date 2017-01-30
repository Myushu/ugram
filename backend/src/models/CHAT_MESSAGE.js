/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHAT_MESSAGE', {
    ID_MESSAGE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_CHAT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CHAT',
        key: 'ID_CHAT'
      }
    },
    ID_SENDER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'CHAT_MESSAGE'
  });
};
