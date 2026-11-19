// PracticeSG Central App Controller
class App {
  constructor() {
    this.mainContainer = null;
  }

  init() {
    this.mainContainer = document.getElementById('appMain');

    // Apply saved accessibility preferences
    appState.setFontScale(appState.fontScaleLevel);
    if (appState.highContrast) {
      document.body.classList.add('high-contrast');
    }

    // Bind accessibility buttons
    this.bindHeaderControls();

    // Render Home by default
    this.showHome();
  }

  bindHeaderControls() {
    const fontBtn = document.getElementById('fontScaleBtn');
    if (fontBtn) {
      fontBtn.addEventListener('click', () => {
        let nextLevel = appState.fontScaleLevel + 1;
        if (nextLevel > 3) nextLevel = 1;
        appState.setFontScale(nextLevel);
        this.updateHeaderLabels();
        this.reRenderCurrentView();
      });
    }

    const contrastBtn = document.getElementById('contrastToggleBtn');
    if (contrastBtn) {
      contrastBtn.addEventListener('click', () => {
        appState.toggleHighContrast();
        this.reRenderCurrentView();
      });
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = appState.lang;
      langSelect.addEventListener('change', (e) => {
        appState.setLanguage(e.target.value);
        this.updateHeaderLabels();
        this.reRenderCurrentView();
      });
    }

    const voiceBtn = document.getElementById('headerVoiceBtn');
    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => {
        const textToRead = this.getCurrentPageText();
        window.voiceAssist.toggle(textToRead, appState.lang, voiceBtn);
      });
    }

    this.updateHeaderLabels();
  }

  updateHeaderLabels() {
    const fontBtn = document.getElementById('fontScaleBtn');
    if (fontBtn) {
      const labels = { 1: appState.t('fontNormal'), 2: appState.t('fontLarge'), 3: appState.t('fontExtra') };
      fontBtn.innerText = labels[appState.fontScaleLevel] || appState.t('fontNormal');
    }

    const progressBtn = document.getElementById('headerProgressBtn');
    if (progressBtn) {
      progressBtn.innerText = appState.t('myProgress');
    }

    const homeNavBtn = document.getElementById('headerHomeBtn');
    if (homeNavBtn) {
      homeNavBtn.innerText = appState.t('homeNav');
    }
  }

  showHome() {
    window.voiceAssist.stop();
    appState.currentView = 'home';
    appState.activeModuleKey = null;

    const moduleKeys = ['paynow', 'singpass', 'clinic', 'qrscanner', 'shopping', 'scamquiz'];

    const cardsHtml = moduleKeys.map(key => {
      const isDone = appState.completedModules.includes(key);
      const title = appState.t(`modules.${key}.title`);
      const desc = appState.t(`modules.${key}.desc`);
      const icon = progressPage.getModuleIcon(key);

      return `
        <div class="category-card" onclick="app.startModule('${key}')" tabindex="0" role="button" aria-label="${title}">
          <div class="card-top">
            <div class="category-icon">${icon}</div>
            <div class="category-info">
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
          </div>
          <div class="card-footer">
            <span class="badge ${isDone ? 'badge-completed' : 'badge-ready'}">
              ${isDone ? appState.t('completedTag') : appState.t('readyTag')}
            </span>
            <span class="start-btn-text">
              ${appState.t('continueToPractice')}
            </span>
          </div>
        </div>
      `;
    }).join('');

    this.mainContainer.innerHTML = `
      <div class="page-title-bar">
        <div>
          <h1 class="page-title">${appState.t('homeQuestion')}</h1>
          <p style="font-size: 1.2rem; color: var(--text-muted); font-weight: 700; margin-top: 0.3rem;">
            ${appState.t('homeSubtitle')}
          </p>
        </div>
        <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t('homeQuestion')}. ${appState.t('homeSubtitle')}', appState.lang)">
          ${appState.t('voiceAssist')}
        </button>
      </div>

      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;
  }

  startModule(moduleKey) {
    window.voiceAssist.stop();
    appState.activeModuleKey = moduleKey;

    // Trigger Pre-Confidence Rating modal first
    confidenceModal.showPreConfidence(moduleKey, () => {
      this.launchSimulation(moduleKey);
    });
  }

  launchSimulation(moduleKey) {
    appState.currentView = moduleKey;

    const simMap = {
      paynow: payNowSim,
      singpass: singpassSim,
      clinic: clinicSim,
      qrscanner: qrScannerSim,
      shopping: shoppingSim,
      scamquiz: scamQuizSim
    };

    const sim = simMap[moduleKey];
    if (sim) {
      sim.step = 1;
      if (sim.currentScenarioIndex) sim.currentScenarioIndex = 1;
      if (sim.showFeedback !== undefined) sim.showFeedback = false;
      sim.render(this.mainContainer);
    }
  }

  showProgress() {
    window.voiceAssist.stop();
    appState.currentView = 'progress';
    progressPage.render(this.mainContainer);
  }

  reRenderCurrentView() {
    if (appState.currentView === 'home') {
      this.showHome();
    } else if (appState.currentView === 'progress') {
      this.showProgress();
    } else if (appState.activeModuleKey) {
      const simMap = {
        paynow: payNowSim,
        singpass: singpassSim,
        clinic: clinicSim,
        qrscanner: qrScannerSim,
        shopping: shoppingSim,
        scamquiz: scamQuizSim
      };
      const sim = simMap[appState.activeModuleKey];
      if (sim) sim.render(this.mainContainer);
    }
  }

  getCurrentPageText() {
    if (appState.currentView === 'home') {
      return `${appState.t('homeQuestion')}. ${appState.t('homeSubtitle')}`;
    } else if (appState.currentView === 'progress') {
      return `${appState.t('progress.title')}. ${appState.t('progress.subtitle')}`;
    } else if (appState.activeModuleKey) {
      return `${appState.t(`modules.${appState.activeModuleKey}.title`)}. ${appState.t(`modules.${appState.activeModuleKey}.desc`)}`;
    }
    return appState.t('tagline');
  }
}

window.app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
