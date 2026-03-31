export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.logs.push(`[${new Date().toISOString()}] ${message}`);
    console.log(`  LOG: ${message}`);
  }

  getHistory(): string[] {
    return [...this.logs];
  }
}
