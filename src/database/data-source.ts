import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: true,
  entities: ['dist/**/*.entity.js'], // Asegúrate de que las entidades compiladas estén incluidas
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'], // Asegúrate de que las migraciones compiladas estén incluidas
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

//"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d dist/database/data-source.js",
