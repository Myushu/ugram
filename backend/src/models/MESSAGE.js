/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MESSAGE', {
    ID_MESSAGE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_SENDER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    ID_RECEIVER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    DATE_SENDED: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'MESSAGE',
    timestamps : false
  });
};
