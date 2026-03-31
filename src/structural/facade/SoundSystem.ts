export class SoundSystem {
  on(): string { return "Звук увімкнено"; }
  setVolume(level: number): string { return `Гучність: ${level}`; }
  off(): string { return "Звук вимкнено"; }
}
