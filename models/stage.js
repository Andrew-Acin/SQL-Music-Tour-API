'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    static associate({Event, StageEvent}) {
      // Events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })

      // set times
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  stage.init({
    stage_id: {
      allowNull: false,
      type:DataTypes.INTEGER
    },
    stage_name: {
      allowNull: false,
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'stage',
    tableName: 'stage',
    timestamps: false
  });
  return stage;
};