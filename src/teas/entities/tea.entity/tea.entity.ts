import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';

@ObjectType({ implements: () => Drink, description: 'Tea model' })
export class Tea implements Drink {
    name: string;
}
