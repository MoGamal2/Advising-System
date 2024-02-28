var config = {
  user: process.env.DB_USER,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    enableArithAbort: true,
    instancename: process.env.DB_INSTANCE,
  },
  port: 1433,
  pool: {
    max: 3000,
  },
};

module.exports = config;
