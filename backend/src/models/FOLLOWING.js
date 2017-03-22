/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FOLLOWING', {
    ID_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    ID_FOLLOWER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    }
  }, {
    tableName: 'FOLLOWING',
    timestamps : false
  });
};
