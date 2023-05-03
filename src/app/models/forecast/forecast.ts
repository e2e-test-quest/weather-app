import { Wind } from "@models/forecast/wind";
import { Temperature } from "@models/forecast/temperature";

export class Forecast {
    condition !: ForecastConditionType;
    wind !: Wind;
    temperature !: Temperature;
}

export enum ForecastConditionType
{
    Cloudy = 'cloudy',
    Rain = 'rain',
    Sunny = 'sunny'
}
