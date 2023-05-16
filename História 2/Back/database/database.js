const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const Pool = pg.Pool;

const config = `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({ connectionString: config });

module.exports = pool;
