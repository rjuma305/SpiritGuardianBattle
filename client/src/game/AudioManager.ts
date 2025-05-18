export class AudioManager {
  private static bgm: HTMLAudioElement | null = null

  static playMusic(src: string) {
    if (this.bgm) {
      this.bgm.pause()
    }
    this.bgm = new Audio(src)
    this.bgm.loop = true
    this.bgm.play().catch(() => {})
  }

  static playSound(src: string) {
    const audio = new Audio(src)
    audio.play().catch(() => {})
  }

  static stopMusic() {
    if (this.bgm) {
      this.bgm.pause()
      this.bgm = null
    }
  }
}
