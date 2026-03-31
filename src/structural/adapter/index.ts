import { CelsiusSensor } from "./CelsiusSensor";
import { FahrenheitSensor } from "./FahrenheitSensor";
import { FahrenheitToCelsiusAdapter } from "./FahrenheitToCelsiusAdapter";

export function demo() {
  console.log("=== Adapter (Temperature Sensor) ===");

  const oldSensor = new FahrenheitSensor();
  console.log(`  Старий сенсор (°F): ${oldSensor.getTemperature()}`);

  const adapted: CelsiusSensor = new FahrenheitToCelsiusAdapter(oldSensor);
  console.log(`  Через адаптер (°C): ${adapted.getTemperatureCelsius()}`);
  console.log();
}

demo();
