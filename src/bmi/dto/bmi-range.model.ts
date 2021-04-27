/* eslint-disable prettier/prettier */
export class BmiRangeModel {
    state: CategoriesEnum;
    startRange: number; 
    endRange: number;
}

export enum CategoriesEnum {
    Underweight = 'Underweight',
    NormalWeight = 'Normal weight',
    Overweight = 'Overweight',
    Moderatelyobese = 'Moderately obese',
    Severelyobese = 'Severely obese',
    Veryseverelyobese = 'Very severely obese',
    NotFound = 'Not Found'
}
