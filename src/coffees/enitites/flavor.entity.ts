import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType({ description: 'Flavor model' })
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique indentifier' })
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
