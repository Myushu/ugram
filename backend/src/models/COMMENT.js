/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMMENT', {
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
    },
    DATE_CREATION: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'COMMENT'
  });
};
