// PracticeSG Global State Manager
class AppState {
  constructor() {
    this.fontScaleLevel = parseInt(localStorage.getItem('practicesg_font_scale')) || 1; // 1 = 1.0, 2 = 1.2, 3 = 1.45
    this.highContrast = localStorage.getItem('practicesg_contrast') === 'true';
    this.lang = localStorage.getItem('practicesg_lang') || 'en';
    this.currentView = 'home';
    this.activeModuleKey = null;

    // Progress Data stored in localStorage
    this.completedModules = JSON.parse(localStorage.getItem('practicesg_completed')) || [];
    this.confidenceRatings = JSON.parse(localStorage.getItem('practicesg_confidence')) || {};
    
    // Active simulation step tracking
    this.currentStepIndex = 0;
    this.activeSimData = {};
  }

  // Get translation text by key path e.g. "modules.paynow.title" or "homeQuestion"
  t(path) {
    const keys = path.split('.');
    let res = TRANSLATIONS[this.lang] || TRANSLATIONS['en'];
    for (const key of keys) {
      if (res && res[key] !== undefined) {
        res = res[key];
      } else {
        // Fallback to English if translation missing
        let fallback = TRANSLATIONS['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) fallback = fallback[fk];
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }
    return res;
  }

  setFontScale(level) {
    this.fontScaleLevel = level;
    localStorage.setItem('practicesg_font_scale', level);
    const scaleValues = { 1: '1.0', 2: '1.25', 3: '1.5' };
    document.documentElement.style.setProperty('--font-scale', scaleValues[level] || '1.0');
  }

  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    localStorage.setItem('practicesg_contrast', this.highContrast);
    if (this.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  setLanguage(langCode) {
    if (TRANSLATIONS[langCode]) {
      this.lang = langCode;
      localStorage.setItem('practicesg_lang', langCode);
    }
  }

  markModuleCompleted(moduleKey, postRating = 3) {
    if (!this.completedModules.includes(moduleKey)) {
      this.completedModules.push(moduleKey);
      localStorage.setItem('practicesg_completed', JSON.stringify(this.completedModules));
    }
    if (!this.confidenceRatings[moduleKey]) {
      this.confidenceRatings[moduleKey] = {};
    }
    this.confidenceRatings[moduleKey].post = postRating;
    localStorage.setItem('practicesg_confidence', JSON.stringify(this.confidenceRatings));
  }

  setPreConfidence(moduleKey, preRating) {
    if (!this.confidenceRatings[moduleKey]) {
      this.confidenceRatings[moduleKey] = {};
    }
    this.confidenceRatings[moduleKey].pre = preRating;
    localStorage.setItem('practicesg_confidence', JSON.stringify(this.confidenceRatings));
  }
}

window.appState = new AppState();
