import { Observer } from "./Observer";

export class EventEmitter {
  private listeners: Map<string, Observer[]> = new Map();

  subscribe(event: string, observer: Observer): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(observer);
  }

  unsubscribe(event: string, observer: Observer): void {
    const list = this.listeners.get(event);
    if (list) {
      this.listeners.set(event, list.filter(o => o !== observer));
    }
  }

  emit(event: string, data: unknown): void {
    const list = this.listeners.get(event) ?? [];
    for (const observer of list) {
      observer.update(event, data);
    }
  }
}
