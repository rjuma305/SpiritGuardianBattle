export type AudioMap = Record<string, HTMLAudioElement>

export class AudioManager {
  private static sounds: AudioMap = {}
  private static music: AudioMap = {}
  static guardianVoices: Record<string, string> = {}

  static loadSound(id: string, src: string) {
    this.sounds[id] = new Audio(src)
  }

  static playSound(id: string) {
    const snd = this.sounds[id]
    if (snd) snd.play()
  }

  static loadMusic(id: string, src: string) {
    const audio = new Audio(src)
    audio.loop = true
    this.music[id] = audio
  }

  static playMusic(id: string) {
    const mus = this.music[id]
    if (mus) mus.play()
  }

  static stopMusic(id: string) {
    const mus = this.music[id]
    if (mus) mus.pause()
  }

  static playGuardianVoice(guardianId: string) {
    const src = this.guardianVoices[guardianId]
    if (!src) return
    const voice = new Audio(src)
    voice.play()
  }
}
