/* eslint-disable prettier/prettier */
import {IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UsersData {
    @ApiProperty()
    @IsString()
    Gender: string;
    
    @ApiProperty()
    @IsNumber()
    HeightCm: number;
    
    @ApiProperty()
    @IsNumber()
    WeightKg: number;
    
}