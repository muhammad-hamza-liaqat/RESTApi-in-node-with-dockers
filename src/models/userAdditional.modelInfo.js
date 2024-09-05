const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')
const User = require('./user.model')

const UserAdditionalInfo = sequelize.define(
  'UserAdditionalInfo',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {
        street: {
          Lane1: '',
          Lane2: '',
          landmark: ''
        },
        city: {
          birth: '',
          currentCity: ''
        },
        country: {
          countryName: ''
        }
      }
    }
  },
  {
    tableName: 'userAdditional_info',
    timestamps: true
  }
)

// UserAdditionalInfo.belongsTo(User, { foreignKey: 'user_id' });
// User.hasOne(UserAdditionalInfo, { foreignKey: 'user_id' });

module.exports = UserAdditionalInfo
