import {ConfigModule, ConfigService} from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot();
const configService = new ConfigService();

export default new DataSource({
    type: "postgres",
        host: "ep-green-leaf-a18cjz6s-pooler.ap-southeast-1.aws.neon.tech",
        port: 5432,
        password: "npg_qtpAQMk5id2x",
        database: "neondb",
        username: "neondb_owner",
        migrations: ['dist/migrations/*js'],
        entities: [__dirname + '//*.entity{.ts,.js}'],
        ssl: true,
        logging: true,
        migrationsRun: false
});