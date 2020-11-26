const { Model, DataTypes } = require('sequelize');

class Progress extends Model {
  static init(connection){
    super.init({
      course_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      progress: DataTypes.JSON,
    }, {
      sequelize: connection,
      tableName: 'progress'
    })
    return this;
  } 
}

module.exports = Progress; 
