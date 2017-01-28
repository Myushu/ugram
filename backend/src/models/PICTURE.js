/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PICTURE', {
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FILENAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID_OWNER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    DATE_POSTED: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'PICTURE'
  });
};
