import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource } from 'typeorm';
import { join } from 'path';

dotenvExpand.expand(dotenv.config());

export default new DataSource({
  type: 'postgres',
  url: process.env.DATASOURCE_URL,
  entities: [join(__dirname, '/../domain/**/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '/../database/migrations/*{.ts,.js}')],
});
