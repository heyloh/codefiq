const { Model, DataTypes } = require('sequelize');

class Exercise extends Model {
  static init(connection){
    super.init({
      subject_id: DataTypes.INTEGER,
      content: DataTypes.JSON
    }, {
      sequelize: connection
    })
    return this;
  } 
}

module.exports = Exercise;