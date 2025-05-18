export type AudioMap = Record<string, HTMLAudioElement>

export class AudioManager {
  private static sounds: AudioMap = {}
  private static music: AudioMap = {}
  private static currentMusicId: string | null = null

  static guardianVoices: Record<string, string> = {
    terra: 'audio/voices/terra.mp3',
    sprout: 'audio/voices/sprout.mp3',
    gale: 'audio/voices/gale.mp3',
    aqua: 'audio/voices/aqua.mp3',
    blaze: 'audio/voices/blaze.mp3',
    radiant: 'audio/voices/radiant.mp3',
    shade: 'audio/voices/shade.mp3',
    frost: 'audio/voices/frost.mp3',
    volt: 'audio/voices/volt.mp3',
    flameling: 'audio/voices/flameling.mp3',
    droplet: 'audio/voices/droplet.mp3',
    spark: 'audio/voices/spark.mp3',
    glimmer: 'audio/voices/glimmer.mp3',
  }

  static loadSound(id: string, src: string) {
    this.sounds[id] = new Audio(src)
  }

  static playSound(id: string) {
    const snd = this.sounds[id]
    if (snd) {
      snd.currentTime = 0
      snd.play().catch(() => {})
    }
  }

  static loadMusic(id: string, src: string) {
    const audio = new Audio(src)
    audio.loop = true
    this.music[id] = audio
  }

  static playMusic(id: string) {
    if (this.currentMusicId && this.currentMusicId !== id) {
      this.stopMusic(this.currentMusicId)
    }
    const mus = this.music[id]
    if (mus) {
      mus.currentTime = 0
      mus.play().catch(() => {})
      this.currentMusicId = id
    }
  }

  static stopMusic(id: string) {
    const mus = this.music[id]
    if (mus) {
      mus.pause()
      mus.currentTime = 0
    }
    if (this.currentMusicId === id) {
      this.currentMusicId = null
    }
  }

  static playGuardianVoice(guardianId: string) {
    const src = this.guardianVoices[guardianId]
    if (!src) return
    const voice = new Audio(src)
    voice.play().catch(() => {})
  }
}

// ✅ Preload common audio assets
AudioManager.loadSound('attack', 'audio/sfx/attack.mp3')
AudioManager.loadSound('encounter', 'audio/sfx/encounter.mp3')
AudioManager.loadMusic('battle', 'audio/music/battle_theme.mp3')
