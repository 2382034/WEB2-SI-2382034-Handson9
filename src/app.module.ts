import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: "ep-green-leaf-a18cjz6s-pooler.ap-southeast-1.aws.neon.tech",
        port: 5432,
        password: "npg_qtpAQMk5id2x",
        database: "neondb",
        username: "neondb_owner",
        migrations: ['dist/migrations/*js'],
        entities: [__dirname + '//*.entity{.ts,.js}'],
        autoLoadEntities: true,
        ssl: true
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}