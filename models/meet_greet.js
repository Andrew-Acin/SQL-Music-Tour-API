'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({Band, Event}) {
      // Band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      MeetGreet.hasOne(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  MeetGreet.init({
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
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};