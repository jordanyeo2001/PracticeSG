// PracticeSG Senior Progress & Achievements Controller
class ProgressPage {
  render(container) {
    const t = (key) => appState.t(`progress.${key}`);

    const completedCount = appState.completedModules.length;
    const totalModules = 6;
    const stars = completedCount * 3;

    const moduleKeys = ['paynow', 'singpass', 'clinic', 'qrscanner', 'shopping', 'scamquiz'];

    const cardsHtml = moduleKeys.map(modKey => {
      const isDone = appState.completedModules.includes(modKey);
      const modTitle = appState.t(`modules.${modKey}.title`);
      const modDesc = appState.t(`modules.${modKey}.desc`);
      
      const preVal = appState.confidenceRatings[modKey]?.pre || 0;
      const postVal = appState.confidenceRatings[modKey]?.post || 0;

      const emojiMap = { 0: '---', 1: '😟', 2: '😐', 3: '😊' };

      return `
        <div class="category-card" style="${isDone ? 'border-color: #22C55E;' : ''}">
          <div class="card-top">
            <div class="category-icon" style="${isDone ? 'background: #DCFCE7;' : ''}">
              ${this.getModuleIcon(modKey)}
            </div>
            <div class="category-info">
              <h3>${modTitle}</h3>
              <p>${modDesc}</p>
            </div>
          </div>

          <div style="background: var(--primary-light); padding: 0.75rem 1rem; border-radius: 12px; margin-bottom: 1rem; font-size: 1rem; font-weight: 700; display: flex; justify-content: space-between;">
            <span>Confidence: ${emojiMap[preVal]} ➡️ <strong style="color: #16A34A;">${emojiMap[postVal]}</strong></span>
            <span>${isDone ? '⭐⭐⭐' : '---'}</span>
          </div>

          <div class="card-footer">
            <span class="badge ${isDone ? 'badge-completed' : 'badge-ready'}">
              ${isDone ? appState.t('completedTag') : appState.t('readyTag')}
            </span>
            <button class="btn-primary" style="min-height: 44px; padding: 0.4rem 1rem; font-size: 1rem;" onclick="app.startModule('${modKey}')">
              ${t('repeatBtn')}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="sim-container">
        <div class="page-title-bar">
          <div>
            <h2 class="page-title">${t('title')}</h2>
            <p style="font-size: 1.15rem; color: var(--text-muted); font-weight: 700; margin-top: 0.25rem;">
              ${t('subtitle')}
            </p>
          </div>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${t('title')}. ${t('subtitle')}', appState.lang)">🔊</button>
        </div>

        <div class="progress-stats-bar">
          <div class="stat-box">
            <div class="stat-number">${completedCount} / ${totalModules}</div>
            <div class="stat-label">${t('tasksCompleted')}</div>
          </div>
          <div class="stat-box">
            <div class="stat-number" style="color: #D97706;">${stars} ⭐</div>
            <div class="stat-label">${t('starsEarned')}</div>
          </div>
          <div class="stat-box">
            <div class="stat-number" style="color: #16A34A;">${completedCount > 0 ? 'High 😊' : 'Getting Ready!'}</div>
            <div class="stat-label">${t('confidenceLevel')}</div>
          </div>
        </div>

        <h3 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: var(--primary);">Practice Summary</h3>

        <div class="category-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  getModuleIcon(key) {
    const icons = {
      paynow: '💸',
      singpass: '🛡️',
      clinic: '🏥',
      qrscanner: '📱',
      shopping: '🛒',
      scamquiz: '⚠️'
    };
    return icons[key] || '⭐';
  }
}

window.progressPage = new ProgressPage();
