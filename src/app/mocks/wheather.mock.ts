import { TownWeather } from "@models/town-weather";
import { ForecastConditionType } from "@models/forecast/forecast";

export const MOCK_TONWS_WEATHER: Array<TownWeather> = Object.assign([],[
    {
        id:  1,
        name: 'Douala',
        forecast : {
            condition : ForecastConditionType.Cloudy,
            wind : {
                speed : {
                    value : 18.5,
                    unit : 'km/h'
                },
                direction : 'North-West'
            },
            temperature : {
                min : {
                    value : 10.8,
                    unit : '°c'
                },
                max : {
                    value : 29,
                    unit : '°c'
                }
            }
        }
    },
    {
        id:  2,
        name: 'Tunis',
        forecast : {
            condition : ForecastConditionType.Sunny,
            wind : {
                speed : {
                    value : 5.2,
                    unit : 'km/h'
                },
                direction : 'South'
            },
            temperature : {
                min : {
                    value : 23.8,
                    unit : '°c'
                },
                max : {
                    value : 40,
                    unit : '°c'
                }
            }
        }
    },
    {
        id:  3,
        name: 'Limoges',
        forecast : {
            condition : ForecastConditionType.Rain,
            wind : {
                speed : {
                    value : 13.2,
                    unit : 'km/h'
                },
                direction : 'East'
            },
            temperature : {
                min : {
                    value : 8.3,
                    unit : '°c'
                },
                max : {
                    value : 12,
                    unit : '°c'
                }
            }
        }
    }
]);
