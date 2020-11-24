const { Model, DataTypes } = require('sequelize');

class Subject extends Model {
  static init(connection){
    super.init({
      name: DataTypes.STRING,
      course_id: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
    return this;
  } 
}

module.exports = Subject;