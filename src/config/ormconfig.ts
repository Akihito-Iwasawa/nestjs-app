import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/entities/*entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};

export default ormConfig;
