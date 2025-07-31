import { Forecast } from "@models/forecast/forecast";

export class TownWeather {
    id !: number;
    name !: string;
    forecast !: Forecast;

    temperatureRange(): number {
      try {
        return this.forecast.temperature.max!.value - this.forecast.temperature.min!.value;
      } catch (e) {
        throw Error("Invalid temperature min and/or max");
      }
    }
}
