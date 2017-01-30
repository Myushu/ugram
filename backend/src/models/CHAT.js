/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHAT', {
    ID_CHAT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME_CHAT: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'CHAT'
  });
};
