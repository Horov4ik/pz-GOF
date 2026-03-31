export class StreamingPlayer {
  on(): string { return "Плеєр запущено"; }
  play(movie: string): string { return `Відтворення: "${movie}"`; }
  stop(): string { return "Відтворення зупинено"; }
  off(): string { return "Плеєр вимкнено"; }
}
