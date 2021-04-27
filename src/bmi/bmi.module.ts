/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BmiController } from './bmi.controller';
import { BmiService } from './bmi.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        
    ]),
  ],
  controllers: [BmiController],
  providers: [BmiService]
})
export class BmiModule {}
