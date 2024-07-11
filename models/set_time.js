'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    static associate({Band,Event, Stage}) {
      // band
      set_time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      set_time.belongsToOne(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage
      set_time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  set_time.init({
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
    set_time_id: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return set_time;
};