/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { BmiService } from './bmi.service';
import { BmiResponseResult } from './dto/bmi-response';
import { BmiRangeModel } from './dto/bmi-range.model';

@Controller('bmi')
export class BmiController {
    constructor(private service: BmiService) { }
    // @Post('getOverWeightData')
    // async getOverWeightData(@Body() usersData: UsersData[], rangeMap: BmiRangeModel[]): Promise<BmiResponseResult> {
    //    return this.service.getUsersCountByBmiRangeAndState(usersData, rangeMap);
    // }
}
