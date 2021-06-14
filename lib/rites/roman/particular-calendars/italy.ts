import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Italy extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    catherine_of_siena_virgin: {
      customLocaleKey:
        'catherine_of_siena_virgin_copatroness_of_italy_and_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: [
        'Virgin',
        'Doctor of the Church',
        'Copatroness of Italy and Europe',
      ],
    },

    norbert_of_xanten_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    barnabas_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-11',
    },

    mary_magdalene: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    francis_of_assisi: {
      customLocaleKey: 'francis_of_assisi_patron_of_italy',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, 'Patron of Italy'],
    },
  };
}
