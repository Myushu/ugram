/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PHONE_CODE', {
    CODE: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PHONE_CODE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_COUNTRY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'PHONE_CODE'
  });
};
