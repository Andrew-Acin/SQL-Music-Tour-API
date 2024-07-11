'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    static associate({Band, Event}) {
      // Band
      meet_greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      meet_greet.hasOne(Event, {
        foreignKey: "event_id",
        as: "event"
      })
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