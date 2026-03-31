// ========== Adapter ==========
// Проблема: маємо стару бібліотеку (або зовнішній API) з несумісним
// інтерфейсом, але потрібно використати її у новому коді.
// Рішення: обгортка-адаптер перетворює інтерфейс одного класу на інший.

// "Стара" бібліотека, яка повертає температуру у Фаренгейтах
class FahrenheitSensor {
  getTemperature(): number {
    return 98.6; // температура тіла в °F
  }
}

// Інтерфейс, який очікує наш додаток (Цельсій)
interface CelsiusSensor {
  getTemperatureCelsius(): number;
}

// Адаптер
class FahrenheitToCelsiusAdapter implements CelsiusSensor {
  constructor(private sensor: FahrenheitSensor) {}

  getTemperatureCelsius(): number {
    const f = this.sensor.getTemperature();
    return Math.round(((f - 32) * 5) / 9 * 10) / 10;
  }
}

// --- Демонстрація ---
export function demo() {
  console.log("=== Adapter (Temperature Sensor) ===");

  const oldSensor = new FahrenheitSensor();
  console.log(`  Старий сенсор (°F): ${oldSensor.getTemperature()}`);

  const adapted: CelsiusSensor = new FahrenheitToCelsiusAdapter(oldSensor);
  console.log(`  Через адаптер (°C): ${adapted.getTemperatureCelsius()}`);
  console.log();
}

demo();
