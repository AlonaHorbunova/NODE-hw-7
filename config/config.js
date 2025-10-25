import "dotenv/config";

// Заменяем module.exports на export default
export default {
  // Настройки для ЛОКАЛЬНОЙ (разрабатывающей) среды
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT,

    // Настройки для SSL
    dialectOptions: {
      ssl:
        process.env.DATEBASE_DIALECT_OPTIONS_SSL === "true"
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : false,
    },
  },

  // Настройки для ТЕСТИРОВАНИЯ
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },

  // Настройки для ПРОДАКШН
  production: {
    username: process.env.DATABASE_USER_CLOUD,
    password: process.env.DATABASE_PASSWORD_CLOUD,
    database: process.env.DATABASE_NAME_CLOUD,
    host: process.env.DATABASE_HOST_CLOUD,
    dialect: process.env.DATABASE_DIALECT_CLOUD,
    port: process.env.DATABASE_PORT_CLOUD,

    // Настройки для SSL
    dialectOptions: {
      ssl:
        process.env.DATEBASE_DIALECT_OPTIONS_SSL_CLOUD === "true"
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : false,
    },
  },
};
