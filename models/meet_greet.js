'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    event_id: { 
      allowNull: false,
      type:DataTypes.INTEGER
    },
    band_id: {
      allowNull: false,
      type:DataTypes.INTEGER
    },
    meet_start_time: {
      allowNull: false,
      type:DataTypes.TIME
    },
    meet_end_time: {
      allowNull: false,
      type:DataTypes.TIME}
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return meet_greet;
};