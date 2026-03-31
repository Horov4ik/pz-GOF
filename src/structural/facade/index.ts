import { TV } from "./TV";
import { SoundSystem } from "./SoundSystem";
import { StreamingPlayer } from "./StreamingPlayer";
import { Lights } from "./Lights";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

export function demo() {
  console.log("=== Facade (Home Theater) ===");

  const theater = new HomeTheaterFacade(
    new TV(), new SoundSystem(), new StreamingPlayer(), new Lights(),
  );

  console.log("  Запуск фільму:");
  theater.watchMovie("Inception").forEach(s => console.log(`    ${s}`));

  console.log("  Завершення:");
  theater.endMovie().forEach(s => console.log(`    ${s}`));
  console.log();
}

demo();
