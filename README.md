# PracticeSG

PracticeSG is a lightweight, browser-based interactive simulation web application designed to help users—such as seniors, newcomers, and everyday citizens—practice and build digital confidence with essential Singapore digital services and online safety in a safe, risk-free environment.

## Features

* **Interactive Digital Service Simulations**: Step-by-step practice modules for everyday Singaporean digital tasks:
  * **Singpass** (`singpass.js`): Practice logging in and navigating digital identity flows.
  * **PayNow** (`paynow.js`): Simulate peer-to-peer and merchant digital fund transfers.
  * **QR Code Scanning** (`qrscanner.js`): Learn how to scan and verify QR codes safely.
  * **Clinic Registration / E-Health** (`clinic.js`): Navigate digital healthcare check-ins and appointments.
  * **Online Shopping** (`shopping.js`): Walk through e-commerce browsing and checkout processes.
  * **Scam Awareness Quiz** (`scamquiz.js`): Test and strengthen your ability to spot common scams.
* **Multi-Language Support**: Built-in localization (`translations.js`) to accommodate Singapore's diverse linguistic needs.
* **Text-to-Speech Assistance**: Integrated audio guidance (`speech.js`) for improved accessibility.
* **Progress & Confidence Tracking**: Tracks user completion (`progress.js`) and gauges self-reported comfort levels via an interactive confidence check-in (`confidenceModal.js`).
* **Zero-Dependency Vanilla Architecture**: Built purely with standard HTML5, CSS3, and modular vanilla JavaScript—no build tools or external frameworks required.

## Project Structure

```text
practicesg/
├── index.html                  # Main entry point and UI layout
├── css/
│   └── style.css               # Application styling and responsive layout
└── js/
    ├── app.js                  # Core application initialization and routing
    ├── state.js                # Client-side state management
    ├── progress.js             # User module completion tracking
    ├── confidenceModal.js      # Confidence assessment modal logic
    ├── speech.js               # Web Speech API / audio narration helper
    ├── translations.js         # Multi-language string dictionary
    └── simulations/            # Individual interactive practice modules
        ├── clinic.js           # Clinic visit & registration simulation
        ├── paynow.js           # PayNow transfer simulation
        ├── qrscanner.js        # QR scanner simulation
        ├── scamquiz.js         # Scam detection quiz
        ├── shopping.js         # Online shopping simulation
        └── singpass.js         # Singpass login simulation
```

## Getting Started

Because PracticeSG is built with static frontend files, no package installation or compilation step is needed.

### Option 1: Open Directly
1. Extract the `practicesg` archive.
2. Open `practicesg/index.html` directly in any modern web browser (Chrome, Safari, Edge, or Firefox).

### Option 2: Run with a Local Development Server (Recommended)
Running via a local HTTP server prevents any browser restrictions around ES modules or local storage:

```bash
# Navigate to the project directory
cd practicesg

# Using Python 3
python3 -m http.server 8000

# Or using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown in your terminal) in your browser.

## Contributing

1. Add new simulation modules inside `js/simulations/`.
2. Register the new module in `js/app.js` and `js/state.js`.
3. Add corresponding UI text and localized strings in `js/translations.js`.
