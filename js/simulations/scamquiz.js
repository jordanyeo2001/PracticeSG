// PracticeSG Scam Recognition Practice Simulation - Official Singapore Police Force & ScamShield Framework
class ScamQuizSimulation {
  constructor() {
    this.currentScenarioIndex = 1; // 1, 2, 3
    this.selectedAnswer = null; // 1 or 2
    this.showFeedback = false;
  }

  render(container) {
    const t = (key) => appState.t(`modules.scamquiz.${key}`);

    const scenarioKey = `scenario${this.currentScenarioIndex}`;
    const scenData = appState.t(`modules.scamquiz.${scenarioKey}`);

    const isWhatsApp = this.currentScenarioIndex === 2;

    let phoneScreenContent = '';

    if (!this.showFeedback) {
      phoneScreenContent = `
        ${isWhatsApp ? `
          <div class="whatsapp-skin">
            <div class="phone-app-header">
              <div class="chat-avatar" style="background: #128C7E; color: #FFFFFF; font-weight: 900;">M</div>
              <div>
                <strong style="display: block; font-size: 1.1rem;">Unknown (Claiming to be Child)</strong>
                <span style="font-size: 0.85rem; opacity: 0.9;">online</span>
              </div>
            </div>

            <div class="whatsapp-body">
              <div class="chat-bubble incoming">
                ${scenData.message}
                <span style="display: block; text-align: right; font-size: 0.75rem; color: #64748B; margin-top: 0.3rem;">10:14 AM</span>
              </div>
            </div>
          </div>
        ` : `
          <div class="sms-skin">
            <div class="phone-app-header">
              <div class="chat-avatar" style="background: #94A3B8; color: #FFFFFF; font-weight: 900;">💬</div>
              <div>
                <strong style="display: block; font-size: 1.05rem; color: #0F172A;">${scenData.sender}</strong>
                <span style="font-size: 0.85rem; color: #64748B;">Text Message (SMS)</span>
              </div>
            </div>

            <div style="padding: 1.25rem; background: #F8FAFC; flex: 1;">
              <div class="chat-bubble incoming" style="background: #E2E8F0; color: #0F172A;">
                ${scenData.message}
                <span style="display: block; text-align: right; font-size: 0.75rem; color: #64748B; margin-top: 0.3rem;">Today 09:42 AM</span>
              </div>
            </div>
          </div>
        `}

        <div style="padding: 1.25rem; background: #FFFFFF; border-top: 2px solid #E2E8F0;">
          <p style="font-size: 1.2rem; font-weight: 900; margin-bottom: 0.85rem; color: var(--primary); text-align: center;">
            ❓ ${scenData.question}
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="selectable-option" onclick="scamQuizSim.submitAnswer(1)">
              <span>${scenData.opt1}</span>
            </button>
            <button class="selectable-option" onclick="scamQuizSim.submitAnswer(2)">
              <span>${scenData.opt2}</span>
            </button>
          </div>
        </div>
      `;
    } else {
      const isCorrect = this.selectedAnswer === 2; // Option 2 is always the safe action in dictionary

      phoneScreenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: ${isCorrect ? '#DCFCE7' : '#FEE2E2'}; width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1rem auto; border: 3px solid ${isCorrect ? '#22C55E' : '#EF4444'};">
            ${isCorrect ? '✅' : '🚨'}
          </div>

          <h2 style="font-size: 1.6rem; font-weight: 900; color: ${isCorrect ? '#14532D' : '#7F1D1D'}; margin-bottom: 0.25rem;">
            ${isCorrect ? 'SAFE CHOICE! 🎉' : 'UNSAFE CHOICE! ⚠️'}
          </h2>

          <div style="font-size: 1.15rem; font-weight: 800; margin: 1rem 0; color: ${isCorrect ? '#166534' : '#991B1B'}; line-height: 1.5; background: ${isCorrect ? '#F0FDF4' : '#FEF2F2'}; padding: 1rem; border-radius: 16px; border: 2px solid ${isCorrect ? '#86EFAC' : '#FCA5A5'};">
            ${scenData.explanation}
          </div>

          <div class="safety-tip-box" style="text-align: left; margin-top: 1rem;">
            <span class="safety-tip-icon">🛡️</span>
            <div>
              <strong>ScamShield Official Guidance (ACT):</strong><br>
              • <strong>ADD</strong> ScamShield app to block fake calls & SMS<br>
              • <strong>CHECK</strong> for scam signs (no clickable links in bank SMS)<br>
              • <strong>TELL</strong> authorities, bank, and family members immediately
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">⚠️ ${t('title')}</h2>
          <span class="sim-step-indicator">Scenario ${this.currentScenarioIndex} of 3</span>
        </div>

        <div class="sim-instruction-box">
          <span>${t('step1Instruction')}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${scenData.sender}. ${scenData.message}. ${scenData.question}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated Phone Messaging Frame -->
        <div class="phone-emulation-frame" style="border-color: #334155;">
          <div class="phone-status-bar" style="background: #1E293B; color: #FFFFFF;">
            <span>9:41</span>
            <span> ${isWhatsApp ? 'WhatsApp 💬' : 'Messages SMS 💬'} 📶 🔋</span>
          </div>

          <div class="phone-screen-content">
            ${phoneScreenContent}
          </div>
        </div>

        <div class="action-bar">
          <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>

          ${this.showFeedback ? (
            this.currentScenarioIndex < 3 ? `
              <button class="btn-primary" onclick="scamQuizSim.nextScenario()">Next Scam Scenario ➡️</button>
            ` : `
              <button class="btn-primary" onclick="confidenceModal.showPostConfidence('scamquiz', () => app.showProgress())">
                Finish Quiz & Check Progress 🎉
              </button>
            `
          ) : ''}
        </div>
      </div>
    `;
  }

  submitAnswer(ansNum) {
    this.selectedAnswer = ansNum;
    this.showFeedback = true;
    this.render(document.getElementById('appMain'));

    const scenData = appState.t(`modules.scamquiz.scenario${this.currentScenarioIndex}`);
    if (window.voiceAssist && window.voiceAssist.isSupported()) {
      const resultText = (ansNum === 2) ? 'Safe choice!' : 'Unsafe choice!';
      window.voiceAssist.speak(`${resultText} ${scenData.explanation}`, appState.lang);
    }
  }

  nextScenario() {
    this.currentScenarioIndex++;
    this.showFeedback = false;
    this.selectedAnswer = null;
    this.render(document.getElementById('appMain'));
  }
}

window.scamQuizSim = new ScamQuizSimulation();
