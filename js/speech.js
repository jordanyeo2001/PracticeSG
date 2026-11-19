// PracticeSG Speech Synthesis Helper (Read Aloud for Seniors)
class VoiceAssistant {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.isSpeaking = false;
    this.currentUtterance = null;
  }

  isSupported() {
    return this.synth !== null;
  }

  speak(text, langCode = 'en', onEndCallback = null) {
    if (!this.isSupported() || !text) return;

    // Stop existing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // Slightly slower, clear pace for seniors
    utterance.pitch = 1.0;

    // Map app language code to speech synthesis BCP 47 language tag
    const langMap = {
      en: 'en-SG',
      zh: 'zh-CN',
      ms: 'ms-MY',
      ta: 'ta-IN'
    };

    utterance.lang = langMap[langCode] || 'en-SG';

    // Optional: pick best matching voice if available
    const voices = this.synth.getVoices();
    if (voices && voices.length > 0) {
      const matchedVoice = voices.find(v => v.lang.includes(langCode) || v.lang.includes(utterance.lang));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.updateUI(true);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.updateUI(false);
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.updateUI(false);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && this.isSpeaking) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.updateUI(false);
    }
  }

  toggle(text, langCode, btnElement) {
    if (this.isSpeaking) {
      this.stop();
    } else {
      this.speak(text, langCode, () => {
        if (btnElement) btnElement.classList.remove('speaking');
      });
      if (btnElement) btnElement.classList.add('speaking');
    }
  }

  updateUI(isSpeaking) {
    const voiceBtns = document.querySelectorAll('.voice-assist-btn');
    voiceBtns.forEach(btn => {
      if (isSpeaking) {
        btn.classList.add('speaking');
      } else {
        btn.classList.remove('speaking');
      }
    });
  }
}

window.voiceAssist = new VoiceAssistant();
