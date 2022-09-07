import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "dbuser",
    password: '1234',
    database: 'dbtest', 
    entities: [__dirname + '/entity/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  
};

export default config;
