/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HASHTAG', {
    ID_PICTURE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PICTURE',
        key: 'ID_PICTURE'
      }
    },
    HASHTAG: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'HASHTAG',
    timestamps : false
  });
};
