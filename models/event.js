'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Event.belongsToMany(models.Theme, { through: 'ThemeEvent' });
    }
  };
  Event.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};