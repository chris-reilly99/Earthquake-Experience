const { Model, DataTypes, TEXT } = require('sequelize');
const sequelize = require('../config/connection');

class Experience extends Model { }

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eq_id: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    feel_it: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'experience',
  }
);

module.exports = Experience;
