// PracticeSG PayNow Simulation Module - Official Singapore PayNow User Flow (Sanitized Fictitious Bank Branding)
class PayNowSimulation {
  constructor() {
    this.step = 1;
    this.payType = 'uen';
    this.recipient = 'Ah Huat Kopitiam (LionCity Bank • UEN 201912345K)';
    this.recipientName = 'AH HUAT KOPITIAM PTE LTD';
    this.recipientBank = 'LIONCITY BANK PTE LTD';
    this.amount = '5.50';
    this.notes = 'Kopi & Toast';
    this.pin = '';
  }

  render(container) {
    const t = (key) => appState.t(`modules.paynow.${key}`);

    let screenContent = '';

    if (this.step === 1) {
      screenContent = `
        <div class="ocbc-banner-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h3 style="font-size: 1.4rem; font-weight: 900; color: #0F172A;">Welcome!</h3>
              <p style="font-size: 0.95rem; color: #475569; font-weight: 700; max-width: 200px; margin-top: 0.2rem;">
                LionCity Bank PayNow Practice
              </p>
            </div>
            <div style="font-size: 2.8rem;">👋</div>
          </div>

          <div class="ocbc-quick-actions">
            <button class="ocbc-action-btn active" onclick="payNowSim.nextStep()">
              <div class="ocbc-action-icon">💸</div>
              <span>PayNow</span>
            </button>
            <button class="ocbc-action-btn" onclick="payNowSim.nextStep()">
              <div class="ocbc-action-icon">📷</div>
              <span>Scan & Pay</span>
            </button>
            <button class="ocbc-action-btn" onclick="payNowSim.nextStep()">
              <div class="ocbc-action-icon">📄</div>
              <span>Bills</span>
            </button>
          </div>
        </div>

        <div class="ocbc-account-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div class="ocbc-badge-360">360</div>
              <div>
                <strong style="display: block; font-size: 1.1rem; color: #0F172A;">360 Savings Account</strong>
                <span style="font-size: 0.85rem; color: #64748B; font-family: monospace;">689-13579-246</span>
              </div>
            </div>
            <span style="font-size: 1.2rem; color: #94A3B8;">›</span>
          </div>

          <div style="border-top: 1px dashed #E2E8F0; padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: #64748B; font-size: 0.95rem;">Available balance:</span>
            <strong style="font-size: 1.25rem; font-weight: 900; color: #0F172A;">30,000.00 SGD</strong>
          </div>
        </div>

        <div style="padding: 0 1.25rem 1.25rem 1.25rem; text-align: center;">
          <button class="btn-primary" style="width: 100%; background: var(--ocbc-red);" onclick="payNowSim.nextStep()">
            Tap to PayNow (Local SGD) ➡️
          </button>
        </div>

        <div class="ocbc-bottom-nav">
          <div class="ocbc-nav-item active">🏠<br>Home</div>
          <div class="ocbc-nav-item">🌱<br>Plan</div>
          <div class="ocbc-nav-item" onclick="payNowSim.nextStep()">💸<br>Pay & Transfer</div>
          <div class="ocbc-nav-item">🎁<br>Rewards</div>
          <div class="ocbc-nav-item">⚙️<br>More</div>
        </div>
      `;
    } else if (this.step === 2) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <span style="font-weight: 900; font-size: 1.15rem; color: #0F172A;">PayNow Transfer Proxy</span>
          </div>

          <div style="background: #F1F5F9; border: 1px solid #CBD5E1; border-radius: 50px; padding: 0.6rem 1rem; display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.25rem; color: #64748B;">
            🔍 <span>Search UEN, Mobile, or Name...</span>
          </div>

          <p style="font-size: 0.85rem; font-weight: 900; color: #64748B; letter-spacing: 0.5px; margin-bottom: 0.75rem;">SELECT RECENT PAYEE PROXY</p>

          <div class="selectable-option ${this.recipient.includes('Ah Huat') ? 'selected' : ''}" onclick="payNowSim.setRecipient('${t('opt1').replace(/'/g, "\\'")}', 'AH HUAT KOPITIAM PTE LTD', 'LIONCITY BANK PTE LTD')">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <div class="chat-avatar" style="background: #475569; color: #FFFFFF; font-weight: 900; width: 44px; height: 44px;">AH</div>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.05rem; color: #0F172A;">Ah Huat Kopitiam</strong>
                <span style="font-size: 0.85rem; color: #64748B;">LIONCITY BANK • UEN: 201912345K</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.recipient.includes('Mary') ? 'selected' : ''}" onclick="payNowSim.setRecipient('${t('opt2').replace(/'/g, "\\'")}', 'MARY TAN SOO LIN', 'SG STAR BANK PTE LTD')">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <div class="chat-avatar" style="background: #475569; color: #FFFFFF; font-weight: 900; width: 44px; height: 44px;">AM</div>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.05rem; color: #0F172A;">Aunty Mary</strong>
                <span style="font-size: 0.85rem; color: #64748B;">SG STAR BANK • Mobile +65 9123 4567</span>
              </div>
            </div>
          </div>

          <div class="selectable-option ${this.recipient.includes('Uncle Tan') ? 'selected' : ''}" onclick="payNowSim.setRecipient('${t('opt3').replace(/'/g, "\\'")}', 'TAN AH KOW', 'MERLION BANK LTD')">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <div class="chat-avatar" style="background: #475569; color: #FFFFFF; font-weight: 900; width: 44px; height: 44px;">UT</div>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.05rem; color: #0F172A;">Uncle Tan</strong>
                <span style="font-size: 0.85rem; color: #64748B;">MERLION BANK • Mobile +65 9876 5432</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 3) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div style="margin-bottom: 1.25rem; text-align: left;">
            <span style="font-size: 0.9rem; font-weight: 700; color: #64748B;">System Lookup Payee:</span>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: #0F172A; margin: 0.2rem 0;">${this.recipientName}</h3>
            <span style="font-size: 0.85rem; font-weight: 700; color: #64748B;">${this.recipientBank}</span>
          </div>

          <div style="background: #F8FAFC; border: 2px solid #E2E8F0; border-radius: 16px; padding: 1.25rem; margin-bottom: 1rem;">
            <span style="font-size: 0.9rem; font-weight: 700; color: #64748B;">PayNow Amount</span>
            <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-top: 0.3rem;">
              <span style="font-size: 2.2rem; font-weight: 900; color: #0F172A;">$${this.amount}</span>
              <span style="font-size: 1.2rem; font-weight: 800; color: var(--ocbc-red);">SGD</span>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 16px; padding: 1rem; margin-bottom: 1rem;">
            <label style="font-weight: 800; font-size: 0.95rem; color: #475569; display: block; margin-bottom: 0.4rem;">Payment Reference / Notes:</label>
            <input type="text" value="${this.notes}" class="large-input" style="min-height: 48px; font-size: 1.1rem; margin-bottom: 0;" onchange="payNowSim.notes = this.value">
          </div>

          <div style="background: #FFF1F2; border: 1px solid #FECDD3; padding: 0.85rem 1rem; border-radius: 12px; font-size: 0.9rem; font-weight: 700; color: #9F1239;">
            From: 360 Savings Account (689-13579-246)
          </div>
        </div>
      `;
    } else if (this.step === 4) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div class="safety-tip-box" style="margin-top: 0;">
            <span class="safety-tip-icon">🛡️</span>
            <div>${t('safetyTip')}</div>
          </div>

          <div style="background: #FFFFFF; border: 2px solid var(--ocbc-red); border-radius: 18px; padding: 1.25rem; margin-bottom: 1rem; box-shadow: var(--shadow-sm);">
            <div style="text-align: center; border-bottom: 1px dashed #CBD5E1; padding-bottom: 1rem; margin-bottom: 1rem;">
              <span style="font-size: 0.85rem; font-weight: 800; color: #64748B;">PayNow Transfer Review</span>
              <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--ocbc-red);">$${parseFloat(this.amount || 5.5).toFixed(2)} SGD</h2>
            </div>

            <div class="receipt-detail-row">
              <span>Payee Registered Name:</span>
              <strong style="color: #0F172A; font-size: 1.15rem;">${this.recipientName}</strong>
            </div>

            <div class="receipt-detail-row">
              <span>Payee Bank:</span>
              <strong>${this.recipientBank}</strong>
            </div>

            <div class="receipt-detail-row">
              <span>Transfer Fee:</span>
              <strong style="color: #16A34A;">$0.00 SGD (Free)</strong>
            </div>

            <div class="receipt-detail-row">
              <span>Reference Notes:</span>
              <strong>${this.notes || 'Kopi & Toast'}</strong>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 5) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 2.5rem; color: var(--ocbc-red);">🔒</span>
            <h3 style="font-size: 1.3rem; font-weight: 900; color: #0F172A;">Digital Token Authorisation</h3>
            <p style="font-size: 0.95rem; color: #64748B; font-weight: 700;">Enter 6-digit Security PIN to authorise $${parseFloat(this.amount || 5.5).toFixed(2)} SGD</p>
          </div>

          <div style="font-size: 2.2rem; letter-spacing: 0.5rem; margin-bottom: 1.25rem; color: var(--ocbc-red);">
            ${'⚫'.repeat(this.pin.length)}${'⚪'.repeat(6 - this.pin.length)}
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; max-width: 280px; margin: 0 auto;">
            ${[1,2,3,4,5,6,7,8,9].map(num => `
              <button class="btn-secondary" style="font-size: 1.5rem; min-height: 50px;" onclick="payNowSim.pressPin('${num}')">${num}</button>
            `).join('')}
            <button class="btn-danger" style="font-size: 1rem; min-height: 50px;" onclick="payNowSim.clearPin()">Clear</button>
            <button class="btn-secondary" style="font-size: 1.5rem; min-height: 50px;" onclick="payNowSim.pressPin('0')">0</button>
            <button class="btn-success" style="font-size: 1rem; min-height: 50px; background: var(--ocbc-red);" onclick="payNowSim.submitPin()">OK</button>
          </div>
        </div>
      `;
    } else if (this.step === 6) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: #FFF1F2; width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1rem auto; border: 3px solid var(--ocbc-red);">
            ✓
          </div>

          <h2 style="font-size: 1.5rem; font-weight: 900; color: #0F172A; margin-bottom: 0.25rem;">
            ${parseFloat(this.amount || 5.5).toFixed(2)} SGD PayNow transfer submitted
          </h2>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 1.25rem; margin: 1.25rem 0; text-align: left; box-shadow: var(--shadow-sm);">
            <div class="receipt-detail-row">
              <span>To:</span>
              <strong style="color: #0F172A;">${this.recipientName}</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Bank:</span>
              <strong>${this.recipientBank}</strong>
            </div>
            <div class="receipt-detail-row">
              <span>When:</span>
              <strong>Today, ${new Date().toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'})}</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Transaction ID:</span>
              <strong style="font-family: monospace; font-size: 0.95rem;">PN202609118842</strong>
            </div>
          </div>

          <div class="demo-notice-tag">${t('receiptNotice')}</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">💸 ${t('title')}</h2>
          <span class="sim-step-indicator">Step ${this.step} of 6</span>
        </div>

        <div class="sim-instruction-box">
          <span>${appState.t(`modules.paynow.step${this.step}Instruction`)}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t(`modules.paynow.step${this.step}Instruction`).replace(/'/g, "\\'")}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated PayNow Mobile App Phone Frame -->
        <div class="phone-emulation-frame ocbc-skin">
          <div class="phone-status-bar" style="background: #FFFFFF; color: #0F172A;">
            <span>9:41</span>
            <span> PayNow 🇸🇬 📶 🔋</span>
          </div>

          <div class="phone-app-header">
            <div class="ocbc-logo-badge">
              <span>LionCity</span> <span style="font-size: 0.85rem; font-weight: 700; color: #64748B;">Digital</span>
            </div>
            <span style="font-size: 0.9rem; font-weight: 800; color: var(--ocbc-red); cursor: pointer;" onclick="app.showHome()">Log out</span>
          </div>

          <div class="phone-screen-content">
            ${screenContent}
          </div>
        </div>

        <div class="action-bar">
          ${this.step === 1 ? `
            <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>
          ` : (this.step < 6 ? `
            <button class="btn-secondary" onclick="payNowSim.prevStep()">${appState.t('back')}</button>
          ` : '')}

          ${this.step < 5 ? `
            <button class="btn-primary" style="background: var(--ocbc-red);" onclick="payNowSim.nextStep()">${this.step === 4 ? appState.t('confirm') + ' 👉' : appState.t('next')}</button>
          ` : ''}

          ${this.step === 6 ? `
            <button class="btn-primary" style="width: 100%; background: var(--ocbc-red);" onclick="confidenceModal.showPostConfidence('paynow', () => app.showProgress())">
              ${appState.t('finish')}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  setRecipient(desc, officialName, bankName) {
    this.recipient = desc;
    this.recipientName = officialName;
    this.recipientBank = bankName || 'LIONCITY BANK PTE LTD';
    this.render(document.getElementById('appMain'));
  }

  pressPin(num) {
    if (this.pin.length < 6) {
      this.pin += num;
      this.render(document.getElementById('appMain'));
    }
  }

  clearPin() {
    this.pin = '';
    this.render(document.getElementById('appMain'));
  }

  submitPin() {
    if (this.pin.length === 6 || this.pin.length === 0) {
      this.step = 6;
      this.render(document.getElementById('appMain'));
    }
  }

  nextStep() {
    if (this.step < 6) {
      this.step++;
      this.render(document.getElementById('appMain'));
      const instruction = appState.t(`modules.paynow.step${this.step}Instruction`);
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

window.payNowSim = new PayNowSimulation();
