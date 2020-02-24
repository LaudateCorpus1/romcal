import * as Dates from "./Dates";
import * as Locales from "./Locales";
import { Titles, LiturgicalColors, Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

// year: Takes the year (integer)
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
// corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday) (defaults to false)
// ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
const dates = async (
    year: number,
    epiphanyOnJan6 = false,
    corpusChristiOnThursday = false,
    ascensionOnSunday = false,
): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        // Solemnities
        {
            key: "immaculateConception",
            type: Types.SOLEMNITY,
            moment: Dates.immaculateConception(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "christmas",
            type: Types.SOLEMNITY,
            moment: Dates.christmas(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "maryMotherOfGod",
            type: Types.SOLEMNITY,
            moment: Dates.maryMotherOfGod(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "epiphany",
            type: Types.SOLEMNITY,
            moment: Dates.epiphany(year, epiphanyOnJan6),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "trinitySunday",
            type: Types.SOLEMNITY,
            moment: Dates.trinitySunday(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "corpusChristi",
            type: Types.SOLEMNITY,
            moment: Dates.corpusChristi(year, corpusChristiOnThursday),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "sacredHeartOfJesus",
            type: Types.SOLEMNITY,
            moment: Dates.sacredHeartOfJesus(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "birthOfJohnTheBaptist",
            type: Types.SOLEMNITY,
            moment: Dates.birthOfJohnTheBaptist(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "peterAndPaulApostles",
            type: Types.SOLEMNITY,
            moment: Dates.peterAndPaulApostles(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "assumption",
            type: Types.SOLEMNITY,
            moment: Dates.assumption(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSaints",
            type: Types.SOLEMNITY,
            moment: Dates.allSaints(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "christTheKing",
            type: Types.SOLEMNITY,
            moment: Dates.christTheKing(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "josephHusbandOfMary",
            type: Types.SOLEMNITY,
            moment: Dates.josephHusbandOfMary(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "annunciation",
            type: Types.SOLEMNITY,
            moment: Dates.annunciation(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "easter",
            type: Types.SOLEMNITY,
            moment: Dates.easter(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "divineMercySunday",
            type: Types.SOLEMNITY,
            moment: Dates.divineMercySunday(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ascension",
            type: Types.SOLEMNITY,
            moment: Dates.ascension(year, ascensionOnSunday),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "pentecostSunday",
            type: Types.SOLEMNITY,
            moment: Dates.pentecostSunday(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        // Lent, Holy Week & Triduum
        {
            key: "ashWednesday",
            type: Types.FERIA,
            moment: Dates.ashWednesday(year),
            data: {
                prioritized: true,
                season: {
                    key: "LENT",
                    value: await Locales.localize({
                        key: "lent.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.PURPLE,
                },
            },
        },
        {
            key: "palmSunday",
            type: Types.SUNDAY,
            moment: Dates.palmSunday(year),
            data: {
                prioritized: true,
                season: {
                    key: "HOLY_WEEK",
                    value: await Locales.localize({
                        key: "holyWeek.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "holyThursday",
            type: Types.TRIDUUM,
            moment: Dates.holyThursday(year),
            data: {
                prioritized: true,
                season: {
                    key: "HOLY_WEEK",
                    value: await Locales.localize({
                        key: "holyWeek.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.TRIDUUM],
                },
            },
        },
        {
            key: "goodFriday",
            type: Types.TRIDUUM,
            moment: Dates.goodFriday(year),
            data: {
                prioritized: true,
                season: {
                    key: "HOLY_WEEK",
                    value: await Locales.localize({
                        key: "holyWeek.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.TRIDUUM],
                },
            },
        },
        {
            key: "holySaturday",
            type: Types.TRIDUUM,
            moment: Dates.holySaturday(year),
            data: {
                prioritized: true,
                season: {
                    key: "HOLY_WEEK",
                    value: await Locales.localize({
                        key: "holyWeek.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.TRIDUUM],
                },
            },
        },
        // Feasts
        {
            key: "holyFamily",
            type: Types.FEAST,
            moment: Dates.holyFamily(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.FEAST_OF_THE_LORD],
                },
            },
        },
        {
            key: "baptismOfTheLord",
            type: Types.FEAST,
            moment: Dates.baptismOfTheLord(year, epiphanyOnJan6),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.FEAST_OF_THE_LORD],
                },
            },
        },
        {
            key: "presentationOfTheLord",
            type: Types.FEAST,
            moment: Dates.presentationOfTheLord(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.FEAST_OF_THE_LORD],
                },
            },
        },
        {
            key: "transfiguration",
            type: Types.FEAST,
            moment: Dates.transfiguration(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.FEAST_OF_THE_LORD],
                },
            },
        },
        {
            key: "theExaltationOfTheHolyCross",
            type: Types.FEAST,
            moment: Dates.theExaltationOfTheHolyCross(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.FEAST_OF_THE_LORD],
                },
            },
        },
        // Memorials
        {
            key: "immaculateHeartOfMary",
            type: Types.FEAST,
            moment: Dates.immaculateHeartOfMary(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    return Promise.all(
        _dates.map(async ({ key, data, ...rest }) => {
            return {
                ...rest,
                name: await Locales.localize({ key: "celebrations." + key }),
                key,
                data: {
                    ...data,
                    meta: {
                        ...data?.meta,
                        titles: data?.meta?.titles ?? [],
                    },
                },
            };
        }),
    );
};

export { dates };
