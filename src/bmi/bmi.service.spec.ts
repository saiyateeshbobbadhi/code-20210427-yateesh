/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BmiService } from './bmi.service';
import { BmiRangeModel, CategoriesEnum } from './dto/bmi-range.model';

describe('BmiService', () => {
  let service: BmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BmiService],
    }).compile();

    service = module.get<BmiService>(BmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const usersData = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
  85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
  "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
  "HeightCm": 167, "WeightKg": 82}];
  
  it('should get overweighted persons', () => {
      const reqObj=usersData;
      const bmiRangeMap: BmiRangeModel[] = [
        {   
            state: CategoriesEnum.Underweight,
            startRange: 0, 
            endRange: 18.4
        }, {
            state: CategoriesEnum.NormalWeight,
            startRange: 18.5, 
            endRange: 24.9
        }, {
            state: CategoriesEnum.Overweight,
            startRange: 25, 
            endRange: 29.9
        }, {
            state: CategoriesEnum.Moderatelyobese,
            startRange: 30, 
            endRange: 34.9
        }, {
            state: CategoriesEnum.Severelyobese,
            startRange: 35, 
            endRange: 39.9
        }, {
            state: CategoriesEnum.Veryseverelyobese,
            startRange: 40, 
            endRange: 99999
        }
    ];

      const userCategoryCount = new Map<CategoriesEnum, number>();
      userCategoryCount.set(CategoriesEnum.Moderatelyobese, 0);
      userCategoryCount.set(CategoriesEnum.NormalWeight, 0);
      userCategoryCount.set(CategoriesEnum.Overweight, 0);
      userCategoryCount.set(CategoriesEnum.Severelyobese, 1);
      userCategoryCount.set(CategoriesEnum.Underweight, 0);
      userCategoryCount.set(CategoriesEnum.Veryseverelyobese, 5);
      const serviceResponse =  service.getUsersCountByBmiRangeAndState(usersData, bmiRangeMap);
      expect(serviceResponse).toEqual(userCategoryCount);
  });

  it('should caliculate bmi value', () => {
    const reqObj=usersData;
    const bmiModelData: BmiRangeModel = {
      state: CategoriesEnum.Veryseverelyobese,
      startRange: 40,
      endRange: 9999,
    };
    const returnResponse = CategoriesEnum.Veryseverelyobese;
    const serviceResponse =  service.categorizeUser(usersData[0], [bmiModelData]);
    expect(serviceResponse).toEqual(returnResponse);
  });



});
