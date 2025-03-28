"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
config_1.ConfigModule.forRoot();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT') ? configService.get('POSTGRES_POST') : 5432,
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DATABASE'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    ssl: true,
    logging: true,
    migrationsRun: false
});
//# sourceMappingURL=data-source.js.map