import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from './enitites/coffee.entity';
import { Flavor } from './enitites/flavor.entity';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}
  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
