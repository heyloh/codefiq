const { Model, DataTypes } = require('sequelize');

class Video extends Model {
  static init(connection){
    super.init({
      subject_id: DataTypes.INTEGER,
      url: DataTypes.STRING(11)
    }, {
      sequelize: connection
    })
    return this;
  } 
}

module.exports = Video;