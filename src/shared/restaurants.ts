import { Dish } from '../shared/dish';

export interface Restaurant {
    id: number;
    name: string;
    image: string;
    dishes: Dish[];
}