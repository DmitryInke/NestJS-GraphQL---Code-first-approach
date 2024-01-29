import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './enitites/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}
  async findAll() {
    return [];
  }

  async findOne(id: number) {
    return null;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    return null;
  }
}
