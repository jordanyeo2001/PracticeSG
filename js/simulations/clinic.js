// PracticeSG Polyclinic Appointment Booking Simulation - Official Singapore Health Portal User Flow
class ClinicSimulation {
  constructor() {
    this.step = 1;
    this.selectedClinic = 'clinic1';
    this.selectedType = 'type1';
    this.selectedTime = 'time1';
    this.smsReminder = true;
  }

  render(container) {
    const t = (key) => appState.t(`modules.clinic.${key}`);

    let screenContent = '';

    if (this.step === 1) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div style="background: #EFF6FF; border: 1px solid #93C5FD; border-radius: 12px; padding: 0.85rem; margin-bottom: 1rem; color: #1E3A8A; font-weight: 700; font-size: 0.95rem;">
            👤 Booking for: TAN AH KOW (Self • Masked NRIC S****567A)
          </div>

          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select Polyclinic Location:</p>

          <div class="selectable-option ${this.selectedClinic === 'clinic1' ? 'selected' : ''}" onclick="clinicSim.selectedClinic = 'clinic1'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">🏥</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('clinic1')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">SingHealth Polyclinics East</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedClinic === 'clinic2' ? 'selected' : ''}" onclick="clinicSim.selectedClinic = 'clinic2'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">🏥</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('clinic2')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">National University Polyclinics West</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedClinic === 'clinic3' ? 'selected' : ''}" onclick="clinicSim.selectedClinic = 'clinic3'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">🏥</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('clinic3')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">National Healthcare Group Central</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.selectedClinic === 'clinic4' ? 'selected' : ''}" onclick="clinicSim.selectedClinic = 'clinic4'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.8rem;">🏥</span>
              <div style="text-align: left;">
                <strong style="display: block;">${t('clinic4')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">SingHealth Polyclinics East</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 2) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select Medical Clinic Service:</p>

          <div class="selectable-option ${this.selectedType === 'type1' ? 'selected' : ''}" onclick="clinicSim.selectedType = 'type1'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.8rem;">👨‍⚕️</span>
              <strong style="font-size: 1.1rem;">${t('type1')}</strong>
            </div>
          </div>

          <div class="selectable-option ${this.selectedType === 'type2' ? 'selected' : ''}" onclick="clinicSim.selectedType = 'type2'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.8rem;">🩸</span>
              <strong style="font-size: 1.1rem;">${t('type2')}</strong>
            </div>
          </div>

          <div class="selectable-option ${this.selectedType === 'type3' ? 'selected' : ''}" onclick="clinicSim.selectedType = 'type3'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.8rem;">👁️</span>
              <strong style="font-size: 1.1rem;">${t('type3')}</strong>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 3) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Available Appointment Slots:</p>

          <div class="selectable-option ${this.selectedTime === 'time1' ? 'selected' : ''}" onclick="clinicSim.selectedTime = 'time1'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.6rem;">📅</span>
              <strong style="font-size: 1.15rem;">${t('time1')}</strong>
            </div>
          </div>

          <div class="selectable-option ${this.selectedTime === 'time2' ? 'selected' : ''}" onclick="clinicSim.selectedTime = 'time2'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.6rem;">📅</span>
              <strong style="font-size: 1.15rem;">${t('time2')}</strong>
            </div>
          </div>

          <div class="selectable-option ${this.selectedTime === 'time3' ? 'selected' : ''}" onclick="clinicSim.selectedTime = 'time3'; clinicSim.render(document.getElementById('appMain'));">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.6rem;">📅</span>
              <strong style="font-size: 1.15rem;">${t('time3')}</strong>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 4) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div class="e-pass-ticket">
            <span style="background: #EFF6FF; color: #0284C7; font-weight: 800; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.85rem;">Appointment Summary</span>
            
            <h3 style="color: var(--healthhub-blue); font-size: 1.3rem; margin: 0.75rem 0 0.5rem 0;">${t(this.selectedClinic)}</h3>
            <p style="font-size: 1.1rem; font-weight: 700;">Service: ${t(this.selectedType)}</p>
            <p style="font-size: 1.25rem; font-weight: 800; color: #16A34A; margin-top: 0.5rem;">${t(this.selectedTime)}</p>
          </div>

          <div style="background: #FEF3C7; border: 2px solid #F59E0B; border-radius: 14px; padding: 1rem; margin-bottom: 1rem; color: #78350F; font-size: 0.95rem; font-weight: 700;">
            ${t('prepNote')}
          </div>

          <div style="background: #F8FAFC; border: 2px solid #E2E8F0; padding: 1rem; border-radius: 16px; margin-bottom: 1rem;">
            <label style="display: flex; align-items: center; gap: 0.75rem; font-size: 1.05rem; font-weight: 700; cursor: pointer;">
              <input type="checkbox" checked="${this.smsReminder}" onchange="clinicSim.smsReminder = this.checked" style="width: 24px; height: 24px;">
              <span>${t('smsReminderCheck')}</span>
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

          <div class="e-pass-ticket" style="border-style: solid; border-color: #22C55E; background: #F0FDF4; text-align: left;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="color: #14532D; font-size: 1.2rem;">${t(this.selectedClinic)}</strong>
              <span style="font-size: 1.5rem;">🏥</span>
            </div>
            <p style="font-weight: 700; font-size: 1.05rem;">${t(this.selectedType)}</p>
            <p style="font-size: 1.25rem; font-weight: 900; color: #16A34A; margin-top: 0.5rem;">${t(this.selectedTime)}</p>
            
            <div style="margin-top: 1rem; border-top: 2px dashed #86EFAC; padding-top: 0.75rem; text-align: center;">
              <span style="font-family: monospace; font-size: 1.2rem; font-weight: 900; letter-spacing: 2px; color: #1E293B;">|||||| |||| ||||| ||||</span>
              <p style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-top: 0.2rem;">Scan QR at Polyclinic Kiosk on arrival day</p>
            </div>
          </div>

          <div class="demo-notice-tag">🔒 Safe Demo: No actual polyclinic booking created.</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">🏥 ${t('title')}</h2>
          <span class="sim-step-indicator">Step ${this.step} of 5</span>
        </div>

        <div class="sim-instruction-box">
          <span>${appState.t(`modules.clinic.step${this.step}Instruction`)}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t(`modules.clinic.step${this.step}Instruction`).replace(/'/g, "\\'")}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated Health Services Mobile App Phone Frame -->
        <div class="phone-emulation-frame healthhub-skin">
          <div class="phone-status-bar">
            <span>9:41</span>
            <span> Health e-Services 🇸🇬 📶 🔋</span>
          </div>

          <div class="phone-app-header">
            <div class="healthhub-logo">
              <span>❤️</span> SG Health
            </div>
            <span style="font-size: 0.85rem; background: rgba(255,255,255,0.2); padding: 0.2rem 0.6rem; border-radius: 50px; font-weight: 700;">e-Services</span>
          </div>

          <div class="phone-screen-content">
            ${screenContent}
          </div>
        </div>

        <div class="action-bar">
          ${this.step === 1 ? `
            <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>
          ` : (this.step < 5 ? `
            <button class="btn-secondary" onclick="clinicSim.prevStep()">${appState.t('back')}</button>
          ` : '')}

          ${this.step < 4 ? `
            <button class="btn-primary" onclick="clinicSim.nextStep()">${appState.t('next')}</button>
          ` : ''}

          ${this.step === 4 ? `
            <button class="btn-success" onclick="clinicSim.nextStep()">${appState.t('confirm')} ✅</button>
          ` : ''}

          ${this.step === 5 ? `
            <button class="btn-primary" style="width: 100%;" onclick="confidenceModal.showPostConfidence('clinic', () => app.showProgress())">
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
      const instruction = appState.t(`modules.clinic.step${this.step}Instruction`);
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

window.clinicSim = new ClinicSimulation();
