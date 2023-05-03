import { Forecast } from "@models/forecast/forecast";

export class TownWeather {
    id !: number;
    name !: string;
    forecast !: Forecast;
}
