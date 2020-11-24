const { Model, DataTypes } = require('sequelize');

class Subject extends Model {
  static init(connection){
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize: connection
    })
    return this;
  } 
}

module.exports = Subject;