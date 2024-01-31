import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Coffee } from '../enitites/coffee.entity';
import { Flavor } from '../enitites/flavor.entity';
import * as DataLoader from 'dataloader';

@Injectable({
  scope: Scope.REQUEST,
})
export class FlavorsByCoffeeLoader extends DataLoader<number, Flavor[]> {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(coffeeIds: readonly number[]): Promise<Flavor[][]> {
    const coffeesWithFlavors = await this.coffeesRepository.find({
      select: ['id'],
      relations: ['flavors'],
      where: {
        id: In(coffeeIds as number[]),
      },
    });

    return coffeesWithFlavors.map((coffee) => coffee.flavors);
  }
}
