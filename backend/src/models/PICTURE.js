/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PICTURE', {
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_OWNER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    FILENAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DATE_POSTED: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'PICTURE',
    timestamps : false,
  });
};
