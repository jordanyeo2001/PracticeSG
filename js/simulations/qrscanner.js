// PracticeSG QR Code Scanning Practice Simulation - Emulating Authentic Camera & PayNow QR Scanner
class QRScannerSimulation {
  constructor() {
    this.step = 1;
    this.selectedPoster = 'posterSafePay';
  }

  render(container) {
    const t = (key) => appState.t(`modules.qrscanner.${key}`);

    let screenContent = '';

    if (this.step === 1) {
      screenContent = `
        <div style="background: #090D16; color: #FFFFFF; flex: 1; padding: 1.5rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 1rem; margin-bottom: 1rem;">
            <p style="font-size: 1.15rem; font-weight: 700; color: #38BDF8;">📷 Camera Viewfinder Mode</p>
            <p style="font-size: 0.95rem; color: #94A3B8; margin-top: 0.2rem;">Hold your phone camera steadily facing the QR code poster.</p>
          </div>

          <div style="border: 4px dashed #38BDF8; width: 220px; height: 220px; margin: 0 auto; border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; background: rgba(56, 189, 248, 0.05);">
            <span style="font-size: 4rem;">📷</span>
            <span style="font-size: 0.9rem; font-weight: 800; color: #38BDF8; margin-top: 0.5rem;">Target QR Here</span>
          </div>

          <div style="margin-top: 1.5rem;">
            <p style="font-weight: 700; color: #E2E8F0;">Tap Next to choose a poster to test!</p>
          </div>
        </div>
      `;
    } else if (this.step === 2) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select a Practice Poster to Scan:</p>

          <div class="selectable-option ${this.selectedPoster === 'posterSafePay' ? 'selected' : ''}" onclick="qrScannerSim.selectedPoster = 'posterSafePay'; qrScannerSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">☕</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('posterSafePay')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Authentic Kopitiam PayNow QR Sticker</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedPoster === 'posterSafeGov' ? 'selected' : ''}" onclick="qrScannerSim.selectedPoster = 'posterSafeGov'; qrScannerSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">🏛️</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('posterSafeGov')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Official Community Event Poster</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedPoster === 'posterScam' ? 'selected' : ''}" onclick="qrScannerSim.selectedPoster = 'posterScam'; qrScannerSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">⚠️</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('posterScam')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Suspicious Sticker Overlay (Scam QR)</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 3) {
      const isScam = this.selectedPoster === 'posterScam';
      const isGov = this.selectedPoster === 'posterSafeGov';
      
      const fakeUrl = isScam ? 'http://win-free-rewards-sg.com/claim-now' : (isGov ? 'https://www.pa.gov.sg/events/community-fest' : 'https://www.paynow.gov.sg/merchant/kopitiam-pay');

      screenContent = `
        <div style="padding: 1.25rem;">
          <div style="background: #FFFFFF; border: 3px solid ${isScam ? '#EF4444' : '#0284C7'}; border-radius: 18px; padding: 1.25rem; text-align: center;">
            <p style="font-size: 0.95rem; font-weight: 800; color: var(--text-muted);">${t('urlHeading')}</p>

            <div style="background: #F1F5F9; border: 2px solid #CBD5E1; padding: 0.85rem; border-radius: 12px; margin: 0.85rem 0; font-family: monospace; font-size: 1.1rem; font-weight: 800; color: #0F172A; word-break: break-all;">
              ${fakeUrl}
            </div>

            <div style="font-size: 1.15rem; font-weight: 800; margin: 1rem 0; color: ${isScam ? '#7F1D1D' : '#14532D'};">
              ${isScam ? t('verdictScam') : t('verdictSafe')}
            </div>

            <div style="margin-top: 1.25rem;">
              ${isScam ? `
                <button class="btn-danger" style="width: 100%;" onclick="qrScannerSim.finishScan(true)">${t('actionBlock')}</button>
              ` : `
                <button class="btn-success" style="width: 100%;" onclick="qrScannerSim.finishScan(false)">${t('actionOpen')}</button>
              `}
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 4) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: #DCFCE7; width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1rem auto; border: 3px solid #22C55E;">
            ✓
          </div>

          <h2 style="font-size: 1.5rem; font-weight: 900; color: #14532D; margin-bottom: 0.25rem;">QR Scanning Practice Completed!</h2>
          <p style="font-size: 1.05rem; color: var(--text-muted); font-weight: 700;">
            Great job! Remember: Always check the website address BEFORE tapping to open!
          </p>

          <div class="demo-notice-tag" style="margin-top: 1.25rem;">🔒 Safe Demo: You successfully identified safe vs suspicious QR codes.</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">📱 ${t('title')}</h2>
          <span class="sim-step-indicator">Step ${this.step} of 4</span>
        </div>

        <div class="sim-instruction-box">
          <span>${appState.t(`modules.qrscanner.step${this.step}Instruction`)}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t(`modules.qrscanner.step${this.step}Instruction`).replace(/'/g, "\\'")}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated Camera Frame -->
        <div class="phone-emulation-frame" style="background: #0F172A; border-color: #334155;">
          <div class="phone-status-bar" style="color: #FFFFFF;">
            <span>9:41</span>
            <span> Camera QR Scanner 📶 🔋</span>
          </div>

          <div class="phone-screen-content" style="background: #F8FAFC;">
            ${screenContent}
          </div>
        </div>

        <div class="action-bar">
          ${this.step === 1 ? `
            <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>
          ` : (this.step < 4 ? `
            <button class="btn-secondary" onclick="qrScannerSim.prevStep()">${appState.t('back')}</button>
          ` : '')}

          ${this.step === 1 ? `
            <button class="btn-primary" onclick="qrScannerSim.nextStep()">${appState.t('next')}</button>
          ` : ''}

          ${this.step === 2 ? `
            <button class="btn-primary" onclick="qrScannerSim.nextStep()">Scan Selected Poster 📷</button>
          ` : ''}

          ${this.step === 4 ? `
            <button class="btn-primary" style="width: 100%;" onclick="confidenceModal.showPostConfidence('qrscanner', () => app.showProgress())">
              ${appState.t('finish')}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  finishScan(isScamBlock) {
    this.step = 4;
    this.render(document.getElementById('appMain'));
  }

  nextStep() {
    if (this.step < 4) {
      this.step++;
      this.render(document.getElementById('appMain'));
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
      this.render(document.getElementById('appMain'));
    }
  }
}

window.qrScannerSim = new QRScannerSimulation();
