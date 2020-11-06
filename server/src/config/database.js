module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'codefiq',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}