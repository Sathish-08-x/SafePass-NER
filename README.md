# SafePass NER — Smart Mountain Road Navigator & Emergency Life-Safety Platform

SafePass NER is an intelligent, multi-hazard mountain road navigation and emergency life-safety platform designed specifically for the fragile geography of North East India. Unlike conventional navigation apps that optimize solely for transit time, SafePass NER optimizes for **transit survival, structural clearance, and automated emergency relief**.

---

## Key Features & Capabilities

### 1. Multi-Criteria Hazard Scoring Algorithm
SafePass calculates a real-time **Dynamic Safety Score (0–100)** for every road corridor using weighted multi-hazard scientific criteria:

$$\text{Smart Score} = (100 - \text{Risk Score}) \times 0.5 + \text{Accessibility Score} \times 0.3 + \text{Route Score} \times 0.2$$

* **50% Terrain & Disaster Risk**: Evaluated against Landslide Susceptibility, Cloudburst Precipitation, River Inundation, and Hill Gradient.
* **30% Structural Accessibility**: Evaluated against Indian Roads Congress (IRC Class 70R/40) bridge tonnage ratings, safe waterways, and all-weather pavement.
* **20% Route Quality**: Evaluated against asphalt condition, gentle grade curves, and convoy speed efficiency.

### 2. 24-Sector Granular Segment Risk Telemetry Model
Each computed corridor card renders a real-time **Segment Risk Telemetry Bar** dividing the highway corridor into 24 distinct sectors:
* **`LOW` (Green)**: Standard pavement, safe dry embankment, gentle slope (<6%), and all-weather bridge clearance.
* **`MED` (Amber)**: Valley bypass sections, proximity to low causeways, seasonal waterlogging, or moderate winding grades.
* **`HIGH` (Red)**: Steep hairpins (>12%), unpaved rockfall zones, weak timber bridges, or flood submergence risks.

### 3. 1-Click Autonomous Emergency SOS Danger Protocol (5-to-1 Countdown)
Built for high-stress mountain emergencies, vehicle crashes, and loss of consciousness:
* **1-Click Activation**: Commuter taps SOS once.
* **Clutter-Free 5-to-1 Countdown**: Secondary buttons hide immediately, showing an urgent countdown timer with audio warning beeps.
* **Zero-Touch Automated Execution at 0s**:
  * Triggers immediate emergency call to Government Disaster & Police Response (`tel:112`).
  * Dispatches concise distress SMS containing live GNSS coordinates and Google Maps location to registered parents.
  * Activates emergency beacon siren and logs the incident to the local dispatch store.

### 4. Client-Side Persistent Database & MD5 Cryptography
* **IndexedDB Architecture (`SafePassNER_DB`)**: Securely stores commuter profiles and SOS telemetry logs on the local device, operating seamlessly online and offline.
* **RFC 1321 MD5 Password Hashing**: Passwords entered during registration are irreversibly hashed before database storage. Raw plaintext credentials are never saved or exposed.

### 5. 100% Offline Autonomous Satellite Navigation (PWA)
* Integrated Progressive Web App Service Worker (`sw.js`) pre-caches core assets, map engines, icon libraries, and local database scripts.
* Directly interfaces with hardware GNSS chips receiving signals from GPS and Indian NavIC satellites in 24,000 km orbit with zero cellular tower dependency.

### 6. Pan-NER Multi-Lingual Support (11 Regional Languages)
Complete native translations across all user interfaces, inputs, route cards, segment telemetry, and SOS countdown modals:
1. **English**
2. **অসমীয়া (Assamese)**
3. **বাংলা (Bengali)**
4. **हिन्दी (Hindi)**
5. **Mizo ṭawng (Mizo)**
6. **ꯃꯩꯇꯩꯂꯣꯟ (Manipuri)**
7. **Khasi (Meghalaya)**
8. **A·chik / Garo (Meghalaya)**
9. **Kokborok (Tripura)**
10. **बड़ो / Bodo (Bodoland)**
11. **Nagamese (Nagaland)**

---

## File Structure

```text
├── index.html       # Primary SafePass NER Navigation Dashboard
├── login.html       # Commuter Authentication & Session Management
├── signup.html      # Commuter & Emergency Contacts Registration
├── database.js      # IndexedDB Engine & RFC 1321 MD5 Cryptographic Module
├── script.js        # Core Application Engine, Route Calculations, SOS & Telemetry
├── style.css        # Custom Responsive Styles & Dark/Light Theme System
├── sw.js            # Offline PWA Service Worker Cache Controller
├── .gitignore       # Git Ignore Rules
├── README.md        # Project Documentation
├── assets/          # Project Media & Visual Assets
└── lib/             # Standalone Local Client Libraries (MapLibre GL & Lucide)
```

---

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Sathish-08-x/SafePass-NER.git
   cd SafePass-NER
   ```
2. Open `index.html` in any modern web browser, or launch using any static HTTP server:
   ```bash
   npx serve .
   ```
