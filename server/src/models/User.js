const { Model, DataTypes } = require('sequelize');

const { hash } = require('bcryptjs');

class User extends Model {
  static init(connection) {
    /* Defining the attributes the user receives on init */
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    }, {
      sequelize: connection
    })

    /* Hashing password, for security reasons */
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await hash(user.password, 8);
      }
    })

    return this;
  }
}

module.exports = User;