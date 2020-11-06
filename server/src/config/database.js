/* Configure the database to use PostgreSQL on Docker */

module.exports = {
  dialect: 'postgres',    /*  Selected database */
  host: 'localhost',
  username: 'postgres',   /*  Your Image name */
  password: 'docker',     /*  Your container password */
  database: 'codefiq',    /* Desired name */
  define: {               /* Standards */
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}