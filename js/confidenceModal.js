// PracticeSG Pre & Post Confidence Modal Controller
class ConfidenceModal {
  constructor() {
    this.modalOverlay = null;
    this.selectedRating = 2; // Default to mid (2)
  }

  showPreConfidence(moduleKey, onStartCallback) {
    this.selectedRating = appState.confidenceRatings[moduleKey]?.pre || 2;
    
    const title = appState.t('preConfTitle');
    const question = appState.t('preConfQuestion');
    const low = appState.t('confLow');
    const mid = appState.t('confMid');
    const high = appState.t('confHigh');
    const startText = appState.t('continueToPractice');

    this.renderModal({
      title,
      question,
      lowText: low,
      midText: mid,
      highText: high,
      buttonText: startText,
      onSubmit: () => {
        appState.setPreConfidence(moduleKey, this.selectedRating);
        this.close();
        if (onStartCallback) onStartCallback();
      }
    });
  }

  showPostConfidence(moduleKey, onFinishCallback) {
    this.selectedRating = 3; // Default to high (3) after practice!
    
    const title = appState.t('postConfTitle');
    const question = appState.t('postConfQuestion');
    const low = appState.t('confLow');
    const mid = appState.t('confMid');
    const high = appState.t('confHigh');
    const finishText = appState.t('saveProgress');

    this.renderModal({
      title,
      question,
      lowText: low,
      midText: mid,
      highText: high,
      buttonText: finishText,
      onSubmit: () => {
        appState.markModuleCompleted(moduleKey, this.selectedRating);
        this.close();
        if (onFinishCallback) onFinishCallback();
      }
    });
  }

  renderModal({ title, question, lowText, midText, highText, buttonText, onSubmit }) {
    this.close(); // remove existing if any

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confidenceModalOverlay';

    overlay.innerHTML = `
      <div class="modal-card">
        <h2 class="modal-title">${title}</h2>
        <p style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text-muted);">${question}</p>
        
        <div class="emoji-rating-group">
          <button class="rating-btn ${this.selectedRating === 1 ? 'selected' : ''}" data-val="1" type="button">
            <span class="rating-emoji">😟</span>
            <span class="rating-label">${lowText}</span>
          </button>
          
          <button class="rating-btn ${this.selectedRating === 2 ? 'selected' : ''}" data-val="2" type="button">
            <span class="rating-emoji">😐</span>
            <span class="rating-label">${midText}</span>
          </button>
          
          <button class="rating-btn ${this.selectedRating === 3 ? 'selected' : ''}" data-val="3" type="button">
            <span class="rating-emoji">😊</span>
            <span class="rating-label">${highText}</span>
          </button>
        </div>

        <button class="btn-primary" id="modalSubmitBtn" style="width: 100%; margin-top: 1rem;">
          ${buttonText}
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalOverlay = overlay;

    // Attach event listeners
    const ratingBtns = overlay.querySelectorAll('.rating-btn');
    ratingBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = parseInt(btn.getAttribute('data-val'));
        this.selectedRating = val;
        ratingBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    const submitBtn = overlay.querySelector('#modalSubmitBtn');
    submitBtn.addEventListener('click', () => {
      onSubmit();
    });

    // Voice assist reading modal question
    if (window.voiceAssist && window.voiceAssist.isSupported()) {
      window.voiceAssist.speak(`${title}. ${question}`, appState.lang);
    }
  }

  close() {
    if (this.modalOverlay && this.modalOverlay.parentNode) {
      this.modalOverlay.parentNode.removeChild(this.modalOverlay);
      this.modalOverlay = null;
    }
  }
}

window.confidenceModal = new ConfidenceModal();
