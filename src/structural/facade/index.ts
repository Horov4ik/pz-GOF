// ========== Facade ==========
// Проблема: складна підсистема з багатьма класами — клієнту важко
// працювати з нею напряму.
// Рішення: єдиний спрощений інтерфейс (фасад) для всієї підсистеми.

// Підсистема «Домашній кінотеатр»
class TV {
  on(): string { return "TV увімкнено"; }
  off(): string { return "TV вимкнено"; }
}

class SoundSystem {
  on(): string { return "Звук увімкнено"; }
  setVolume(level: number): string { return `Гучність: ${level}`; }
  off(): string { return "Звук вимкнено"; }
}

class StreamingPlayer {
  on(): string { return "Плеєр запущено"; }
  play(movie: string): string { return `Відтворення: "${movie}"`; }
  stop(): string { return "Відтворення зупинено"; }
  off(): string { return "Плеєр вимкнено"; }
}

class Lights {
  dim(level: number): string { return `Освітлення: ${level}%`; }
}

// Фасад
class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private sound: SoundSystem,
    private player: StreamingPlayer,
    private lights: Lights,
  ) {}

  watchMovie(movie: string): string[] {
    return [
      this.lights.dim(20),
      this.tv.on(),
      this.sound.on(),
      this.sound.setVolume(50),
      this.player.on(),
      this.player.play(movie),
    ];
  }

  endMovie(): string[] {
    return [
      this.player.stop(),
      this.player.off(),
      this.sound.off(),
      this.tv.off(),
      this.lights.dim(100),
    ];
  }
}

// --- Демонстрація ---
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
