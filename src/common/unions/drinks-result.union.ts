import { createUnionType } from '@nestjs/graphql';
import { Coffee } from 'src/coffees/enitites/coffee.entity';
import { Tea } from 'src/teas/entities/tea.entity/tea.entity';

export const DrinksResultUnion = createUnionType({
  name: 'DrinksResult',
  types: () => [Coffee, Tea],
});
