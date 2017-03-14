/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    ID_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PSEUDO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isEmail : true,
      }
    },
    COUNTRY_PHONE_CODE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'PHONE_CODE',
        key: 'ID_COUNTRY'
      }
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING,
      allowNull: true,
      validate : {
        isNumeric : true,
      }
    },
    PASSWORD_HASH: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PICTURE_PATH: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DATE_BIRTHDAY: {
      type: DataTypes.DATE,
      allowNull: true,
      validate : {
        isAfter : '1970-01-01',
        IsBefore : DataTypes.NOW
      }
    },
    SEXE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate : {
        isIn : [['M', 'F', 'X']]
      }
    },
    ID_USER_FACEBOOK: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'USER',
    timestamps : false,
  });
};
