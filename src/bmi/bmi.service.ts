/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersData } from './dto/users.request';
import { BmiRangeModel, CategoriesEnum } from './dto/bmi-range.model';



@Injectable()
export class BmiService {

    private bmiRangeMap: BmiRangeModel[] = [
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
    private usersData = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
    85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
    "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
    "HeightCm": 167, "WeightKg": 82}];
   
    
    /**
     * 
     * @param usersData the users data
     * @param rangeMap the BMI range map
     */
    getUsersCountByBmiRangeAndState(usersData: UsersData[], rangeMap: BmiRangeModel[]): Map<CategoriesEnum, number> {
        const userCategoryCount = new Map<CategoriesEnum, number>();
        for(const category of rangeMap) {
            userCategoryCount.set(category.state, 0);
        }
        for(const user of usersData) {
            const userCat = this.categorizeUser(user, rangeMap);
            const preCount = userCategoryCount.get(userCat);
            userCategoryCount.set(userCat, preCount+1);
        }
        return userCategoryCount;
    }


    /**
     * categorizes the current obese status of the user based on the BMI range provided
     * @param userData the users data
     * @param rangeMap the BMI range
     */
    categorizeUser(userData: UsersData, rangeMap: BmiRangeModel[]): CategoriesEnum {
        const userBmi = this.calculateBMI(userData.WeightKg, userData.HeightCm);
        for(const category of rangeMap) {
            if (userBmi >= category.startRange && userBmi <= category.endRange) {
                return category.state;
            }
        }
        return CategoriesEnum.NotFound;
    } 

    /**
     * calculates the BMI rounded up to 2 decimals
     * @param mass the mass of the person
     * @param height the height of the person
     */
    calculateBMI(mass: number, height: number): number {
        return Math.round( mass/(height/100) * 10) / 10;
    }

}
