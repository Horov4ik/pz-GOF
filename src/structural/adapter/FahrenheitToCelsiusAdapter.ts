import { CelsiusSensor } from "./CelsiusSensor";
import { FahrenheitSensor } from "./FahrenheitSensor";

export class FahrenheitToCelsiusAdapter implements CelsiusSensor {
  constructor(private sensor: FahrenheitSensor) {}

  getTemperatureCelsius(): number {
    const f = this.sensor.getTemperature();
    return Math.round(((f - 32) * 5) / 9 * 10) / 10;
  }
}
