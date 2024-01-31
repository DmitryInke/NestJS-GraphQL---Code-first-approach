import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';
import { CoffeeType } from 'src/common/enums/coffee-type.enum';

@InputType({ description: 'Create coffee input object type.' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new coffee name' })
  readonly name: string;

  readonly brand: string;

  readonly flavors: string[];

  readonly type: CoffeeType;
}
