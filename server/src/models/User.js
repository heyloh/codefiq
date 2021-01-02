const { Model, DataTypes } = require('sequelize');

const { hash, compare } = require('bcryptjs');

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

  /* Compares this user's password with one given string */
  async checkPassword(password) {
    const sameHash = await compare(password, this.password_hash);
    return sameHash;
  }
}

module.exports = User;