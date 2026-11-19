// PracticeSG GovPass & Government Service Simulation - Official Singapore User Flow & Myinfo Consent
class SingpassSimulation {
  constructor() {
    this.step = 1;
    this.method = 'qr';
    this.selectedService = 'service1';
  }

  render(container) {
    const t = (key) => appState.t(`modules.singpass.${key}`);

    let screenContent = '';

    if (this.step === 1) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: #FFF5F5; border: 2px solid #FEB2B2; border-radius: 16px; padding: 1.25rem; margin-bottom: 1.25rem;">
            <div class="singpass-logo-badge" style="justify-content: center; font-size: 2rem; margin-bottom: 0.5rem; color: var(--singpass-burgundy);">
              GovPass <span class="singpass-dot"></span>
            </div>
            <p style="font-size: 1rem; font-weight: 700; color: #742A2A;">Singapore National Digital Identity</p>
          </div>

          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select Authentication Method:</p>

          <div class="selectable-option ${this.method === 'qr' ? 'selected' : ''}" onclick="singpassSim.method = 'qr'; singpassSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">📷</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('methodQR')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Scan QR code on official government website</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.method === 'otp' ? 'selected' : ''}" onclick="singpassSim.method = 'otp'; singpassSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">💬</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('methodOTP')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Enter NRIC & 6-digit SMS OTP</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 2) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select Government e-Service:</p>

          <div class="selectable-option ${this.selectedService === 'service1' ? 'selected' : ''}" onclick="singpassSim.selectedService = 'service1'; singpassSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 2rem;">🧧</span>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.1rem;">${t('service1')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">vouchers.gov.sg</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedService === 'service2' ? 'selected' : ''}" onclick="singpassSim.selectedService = 'service2'; singpassSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 2rem;">👴</span>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.1rem;">${t('service2')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">myhealth.gov.sg</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedService === 'service3' ? 'selected' : ''}" onclick="singpassSim.selectedService = 'service3'; singpassSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 2rem;">🚌</span>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.1rem;">${t('service3')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">transitlink.com.sg</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 3) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div class="singpass-consent-box">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.4rem;">🛡️</span>
              <strong style="font-size: 1.1rem; color: var(--singpass-burgundy);">Myinfo Data Retrieval Authorisation</strong>
            </div>
            <p style="font-size: 0.95rem; font-weight: 700; color: #4A5568;">
              Government e-Service requests permission to retrieve verified personal data from Myinfo:
            </p>
          </div>

          <div style="background: #F8FAFC; border: 2px solid #E2E8F0; border-radius: 16px; padding: 1.25rem;">
            <div class="receipt-detail-row">
              <span>Full Name:</span>
              <strong style="color: #1E293B;">TAN AH KOW (陈亚狗)</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Masked NRIC:</span>
              <strong style="font-family: monospace;">S****567A</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Citizenship:</span>
              <strong>Singapore Citizen 🇸🇬</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Eligibility Status:</span>
              <strong style="color: #16A34A;">${t('statusEligible')}</strong>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 4) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Application Declaration & Submission:</p>

          <div style="background: #FFF5F5; border: 2px solid var(--singpass-burgundy); padding: 1.25rem; border-radius: 16px; margin-bottom: 1.5rem;">
            <label style="display: flex; align-items: center; gap: 1rem; font-size: 1.15rem; font-weight: 800; cursor: pointer; color: var(--singpass-burgundy);">
              <input type="checkbox" checked style="width: 28px; height: 28px; accent-color: var(--singpass-burgundy);">
              <span>${t('declarationText')}</span>
            </label>
          </div>
        </div>
      `;
    } else if (this.step === 5) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: #DCFCE7; width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1rem auto; border: 3px solid #22C55E;">
            ✓
          </div>

          <h2 style="font-size: 1.6rem; font-weight: 900; color: #14532D; margin-bottom: 0.25rem;">${t('step5Title')}</h2>
          <p style="font-size: 1.05rem; font-weight: 700; color: var(--text-muted);">${t('step5Instruction')}</p>

          <div style="background: #EFF6FF; border: 2px dashed #0284C7; padding: 1.25rem; border-radius: 16px; margin: 1.25rem 0;">
            <span style="font-size: 3rem; display: block; margin-bottom: 0.5rem;">🧧</span>
            <strong style="font-size: 1.4rem; color: #0369A1; display: block;">$300 CDC Vouchers Ready</strong>
            <p style="font-weight: 700; color: var(--text-muted); margin-top: 0.25rem;">Present at participating hawkers & heartland merchants</p>
          </div>

          <div class="demo-notice-tag">${t('govNotice')}</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">🛡️ ${t('title')}</h2>
          <span class="sim-step-indicator">Step ${this.step} of 5</span>
        </div>

        <div class="sim-instruction-box">
          <span>${appState.t(`modules.singpass.step${this.step}Instruction`)}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t(`modules.singpass.step${this.step}Instruction`).replace(/'/g, "\\'")}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated GovPass Mobile App Phone Frame -->
        <div class="phone-emulation-frame singpass-skin">
          <div class="phone-status-bar">
            <span>9:41</span>
            <span> GovPass 🇸🇬 📶 🔋</span>
          </div>

          <div class="phone-app-header">
            <div class="singpass-logo-badge">
              GovPass <span class="singpass-dot"></span>
            </div>
            <span style="font-size: 0.85rem; background: rgba(255,255,255,0.2); padding: 0.2rem 0.6rem; border-radius: 50px; font-weight: 700;">Verified Profile</span>
          </div>

          <div class="phone-screen-content">
            ${screenContent}
          </div>
        </div>

        <div class="action-bar">
          ${this.step === 1 ? `
            <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>
          ` : (this.step < 5 ? `
            <button class="btn-secondary" onclick="singpassSim.prevStep()">${appState.t('back')}</button>
          ` : '')}

          ${this.step < 4 ? `
            <button class="btn-primary" onclick="singpassSim.nextStep()">${appState.t('next')}</button>
          ` : ''}

          ${this.step === 4 ? `
            <button class="btn-success" onclick="singpassSim.nextStep()">${appState.t('confirm')} ✅</button>
          ` : ''}

          ${this.step === 5 ? `
            <button class="btn-primary" style="width: 100%;" onclick="confidenceModal.showPostConfidence('singpass', () => app.showProgress())">
              ${appState.t('finish')}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  nextStep() {
    if (this.step < 5) {
      this.step++;
      this.render(document.getElementById('appMain'));
      const instruction = appState.t(`modules.singpass.step${this.step}Instruction`);
      if (instruction && window.voiceAssist && window.voiceAssist.isSupported()) {
        window.voiceAssist.speak(instruction, appState.lang);
      }
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
      this.render(document.getElementById('appMain'));
    }
  }
}

window.singpassSim = new SingpassSimulation();
