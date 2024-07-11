'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({Band,Event, Stage}) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  SetTime.init({
    event_id: {
      type:DataTypes.INTEGER
    },
    stage_id: {
      type:DataTypes.INTEGER
    },
    band_id: {
      type:DataTypes.INTEGER
    },
    start_time: {
      type:DataTypes.TIME
    },
    end_time: {
      type:DataTypes.TIME
    },
    SetTime_id: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  });
  return SetTime;
};