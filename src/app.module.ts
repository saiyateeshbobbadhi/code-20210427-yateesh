/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmiModule } from './bmi/bmi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';

console.log(config);
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: config.database.type,
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.dbName,
    entities: [
      
    ],
    synchronize: true,
    logging: true,
  }),BmiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
