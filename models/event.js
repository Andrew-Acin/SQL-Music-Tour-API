'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate({Stage, StageEvent, SetTimes, MeetGreet}) {
      // Stages
      event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      })

      // meetGreets
    event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greets"
      })

      // set times
      event.hasMany(SetTimes, {
        foreignKey: "event_id",
        as: "set_times"
      })
    }
  }
  event.init({
    event_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false

    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
    }, {
    sequelize,
    modelName: 'event',
    tableName: 'event',
    timestamps: false
  });
  return event;
};