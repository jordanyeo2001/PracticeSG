// PracticeSG Online Grocery Shopping Practice Simulation - Emulating Authentic NTUC FairPrice Supermarket App
class ShoppingSimulation {
  constructor() {
    this.step = 1;
    this.cart = {
      item1: 1, // Milk
      item2: 1, // Rice
      item3: 1, // Eggs
      item4: 0  // Milo
    };
    this.prices = {
      item1: 3.20,
      item2: 14.50,
      item3: 3.50,
      item4: 8.90
    };
  }

  getTotal() {
    let total = 0;
    for (const key in this.cart) {
      total += (this.cart[key] * (this.prices[key] || 0));
    }
    return total.toFixed(2);
  }

  render(container) {
    const t = (key) => appState.t(`modules.shopping.${key}`);

    let screenContent = '';

    if (this.step === 1) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 0.85rem; color: #1E293B;">Fresh Everyday Groceries:</p>

          ${['item1', 'item2', 'item3', 'item4'].map(itemKey => `
            <div class="grocery-item-card">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div class="grocery-thumb">
                  ${itemKey === 'item1' ? '🥛' : (itemKey === 'item2' ? '🍚' : (itemKey === 'item3' ? '🥚' : '☕'))}
                </div>
                <div>
                  <strong style="display: block; font-size: 1.05rem; color: #0F172A;">${t(itemKey)}</strong>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <button class="btn-secondary" style="min-height: 40px; width: 40px; padding: 0; font-size: 1.3rem;" onclick="shoppingSim.cart['${itemKey}'] = Math.max(0, shoppingSim.cart['${itemKey}'] - 1); shoppingSim.render(document.getElementById('appMain'));">-</button>
                <span style="font-size: 1.25rem; font-weight: 900; min-width: 26px; text-align: center;">${this.cart[itemKey]}</span>
                <button class="btn-primary" style="min-height: 40px; width: 40px; padding: 0; font-size: 1.3rem; background: var(--fairprice-red);" onclick="shoppingSim.cart['${itemKey}'] += 1; shoppingSim.render(document.getElementById('appMain'));">+</button>
              </div>
            </div>
          `).join('')}

          <div style="background: #FFF5F5; border: 2px dashed var(--fairprice-red); padding: 1.15rem; border-radius: 16px; margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 1.15rem; font-weight: 800; color: #742A2A;">${t('cartTotal')}</span>
            <span style="font-size: 1.6rem; font-weight: 900; color: var(--fairprice-red);">$${this.getTotal()} SGD</span>
          </div>
        </div>
      `;
    } else if (this.step === 2) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <p style="font-weight: 800; font-size: 1.15rem; margin-bottom: 1rem; color: #1E293B;">Select Singapore Delivery Address:</p>

          <div class="selectable-option selected">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.8rem;">🏠</span>
              <div style="text-align: left;">
                <strong style="display: block; font-size: 1.1rem;">${t('addressOpt')}</strong>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Default Saved Address</span>
              </div>
            </div>
            <span>✅</span>
          </div>

          <div style="background: #F8FAFC; border: 2px solid #E2E8F0; padding: 1.25rem; border-radius: 16px; margin-top: 1.25rem;">
            <strong style="display: block; font-size: 1.05rem; margin-bottom: 0.4rem; color: #1E293B;">Delivery Time Slot:</strong>
            <p style="font-size: 1.15rem; font-weight: 800; color: #16A34A;">📅 Tomorrow Morning (09:00 AM - 12:00 PM)</p>
          </div>
        </div>
      `;
    } else if (this.step === 3) {
      screenContent = `
        <div style="padding: 1.25rem;">
          <div style="background: #F8FAFC; border: 2px solid #E2E8F0; border-radius: 16px; padding: 1.25rem; text-align: left;">
            <h3 style="color: var(--fairprice-red); font-size: 1.3rem; margin-bottom: 0.85rem;">🛒 Checkout Summary</h3>
            
            <div class="receipt-detail-row">
              <span>Total Items:</span>
              <strong>${Object.values(this.cart).reduce((a,b)=>a+b, 0)} items</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Payment Option:</span>
              <strong style="color: var(--paynow-red);">PayNow Digital Payment</strong>
            </div>
            <div class="receipt-detail-row">
              <span>Total Payable:</span>
              <strong style="color: #16A34A; font-size: 1.4rem;">$${this.getTotal()} SGD</strong>
            </div>
          </div>
        </div>
      `;
    } else if (this.step === 4) {
      screenContent = `
        <div style="padding: 1.25rem; text-align: center;">
          <div style="background: #DCFCE7; width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1rem auto; border: 3px solid #22C55E;">
            🚚
          </div>

          <h2 style="font-size: 1.5rem; font-weight: 900; color: #14532D; margin-bottom: 0.25rem;">${t('step4Title')}</h2>
          <p style="font-size: 1.05rem; font-weight: 700; color: var(--text-muted);">${t('step4Instruction')}</p>

          <div style="background: #DCFCE7; border: 2px solid #22C55E; padding: 1.25rem; border-radius: 16px; margin: 1.25rem 0; color: #14532D; font-size: 1.2rem; font-weight: 800;">
            Total Paid: $${this.getTotal()} SGD (Demo)
          </div>

          <div class="demo-notice-tag">🔒 Safe Demo: No actual grocery order was placed.</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <h2 class="page-title">🛒 ${t('title')}</h2>
          <span class="sim-step-indicator">Step ${this.step} of 4</span>
        </div>

        <div class="sim-instruction-box">
          <span>${appState.t(`modules.shopping.step${this.step}Instruction`)}</span>
          <button class="voice-assist-btn" onclick="voiceAssist.speak('${appState.t(`modules.shopping.step${this.step}Instruction`).replace(/'/g, "\\'")}', appState.lang)">🔊</button>
        </div>

        <!-- Emulated FairPrice Mobile App Phone Frame -->
        <div class="phone-emulation-frame fairprice-skin">
          <div class="phone-status-bar">
            <span>9:41</span>
            <span> FairPrice 🇸🇬 📶 🔋</span>
          </div>

          <div class="phone-app-header">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 1.3rem;">FairPrice Online</strong>
              <span style="background: rgba(255,255,255,0.2); padding: 0.2rem 0.6rem; border-radius: 50px; font-size: 0.85rem; font-weight: 800;">🇸🇬 Supermarket</span>
            </div>
            <div class="search-bar-sim">
              🔍 Search fresh groceries...
            </div>
          </div>

          <div class="phone-screen-content">
            ${screenContent}
          </div>
        </div>

        <div class="action-bar">
          ${this.step === 1 ? `
            <button class="btn-secondary" onclick="app.showHome()">${appState.t('back')}</button>
          ` : (this.step < 4 ? `
            <button class="btn-secondary" onclick="shoppingSim.prevStep()">${appState.t('back')}</button>
          ` : '')}

          ${this.step < 3 ? `
            <button class="btn-primary" onclick="shoppingSim.nextStep()">${appState.t('next')}</button>
          ` : ''}

          ${this.step === 3 ? `
            <button class="btn-success" onclick="shoppingSim.nextStep()">${appState.t('confirm')} PayNow ✅</button>
          ` : ''}

          ${this.step === 4 ? `
            <button class="btn-primary" style="width: 100%;" onclick="confidenceModal.showPostConfidence('shopping', () => app.showProgress())">
              ${appState.t('finish')}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  nextStep() {
    if (this.step < 4) {
      this.step++;
      this.render(document.getElementById('appMain'));
      const instruction = appState.t(`modules.shopping.step${this.step}Instruction`);
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

window.shoppingSim = new ShoppingSimulation();
