// Update with your config settings.
require('dotenv').config(); // esto va a cargar las variables de entorno 

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ___> variables de SO
    migrations: {
      directory: './data/migrations'
    },
    seed: { directory : './data/seeds'}
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ___> variables de SO
    migrations: {
      directory: './data/migrations'
    },
    seed: { directory : './data/seeds'}
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ___> variables de SO
    migrations: {
      directory: './data/migrations'
    },
    seed: { directory : './data/seeds'}
  }

};
