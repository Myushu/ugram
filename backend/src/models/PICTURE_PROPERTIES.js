/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PICTURE_PROPERTIES', {
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PICTURE',
        key: 'ID_PICTURE'
      }
    },
    BLUR: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    BRIGTHNESS: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "100"
    },
    CONTRAST: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "100"
    },
    GRAYSCALE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    INVERT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    OPACITY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "100"
    },
    SATURATE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "100"
    },
    SEPIA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'PICTURE_PROPERTIES',
    timestamps : false
  });
};
