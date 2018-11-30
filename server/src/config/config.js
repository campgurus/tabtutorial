module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtutorial',
    user: process.env.DB_USER || 'dariusgoore',
    password: process.env.DB_PASS || 'tabtutorial',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'
      // storage: './tabtutorial.postgres'
    }
  },
  authentication: {
    jwtSecret: process.env. JWT_SECRET || 'secret'
  }
}
