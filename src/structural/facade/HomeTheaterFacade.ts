import { TV } from "./TV";
import { SoundSystem } from "./SoundSystem";
import { StreamingPlayer } from "./StreamingPlayer";
import { Lights } from "./Lights";

export class HomeTheaterFacade {
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
