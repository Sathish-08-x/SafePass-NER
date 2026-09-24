# SafePass-NER — Smart Mountain Road Navigator & Emergency Life-Safety Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen?style=for-the-badge&logo=googlechrome)](https://sathish-08-x.github.io/SafePass-NER/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Sathish-08-x/SafePass-NER)
[![Hackathon](https://img.shields.io/badge/Smart%20India%20Hackathon-SIH26002-orange?style=for-the-badge)](https://sih.gov.in)
[![Institution](https://img.shields.io/badge/Institution-Lovely%20Professional%20University-red?style=for-the-badge)](https://lpu.in)

> **Live Working Application**: [https://sathish-08-x.github.io/SafePass-NER/](https://sathish-08-x.github.io/SafePass-NER/)  
> **Source Code**: [https://github.com/Sathish-08-x/SafePass-NER](https://github.com/Sathish-08-x/SafePass-NER)  
> **Author**: Sathish Gudipudi | Lovely Professional University (CSE111)

---

## About The Project

SafePass-NER is an intelligent, multi-hazard mountain road navigation and emergency life-safety platform built specifically for the fragile geography of the North Eastern Region (NER) of India. 

Developed for **Smart India Hackathon (Problem Statement: SIH26002 - AI-based Smart Logistics & Accessibility Intelligence Platform for NER)** and as a course project for **CSE111 at Lovely Professional University (Faculty Mentor: Atul Kumar)**.

Unlike generic commercial maps that assume flat terrain, smooth multi-lane highways, and uninterrupted 5G connectivity, SafePass-NER is engineered for survival and reliability in extreme mountain environments where sudden landslides, monsoon flash floods, steep ghat inclines, and fragile bridges are common.

---

## Architectural Separation: Frontend & Storage

The codebase is organized into cleanly separated layers:

```text
SafePass-NER/
├── frontend/                     # User Interface & Presentation Layer
│   ├── index.html                # Tactical Navigation Dashboard & HUD
│   ├── login.html                # Commuter Login & Session Management
│   ├── signup.html               # Registration & Emergency Contacts
│   ├── script.js                 # Routing, GIS Logic, SOS Protocol & TTS
│   ├── style.css                 # Responsive Dark/Light Tactical Stylesheet
│   ├── sw.js                     # Offline PWA Service Worker
│   ├── lib/                      # MapLibre GL GIS & Lucide Icons
│   ├── assets/                   # Logos and branding media
│   └── README.md                 # Frontend Documentation
│
├── storage/                      # Storage, Database & Security Layer
│   ├── database.js               # Client-Side IndexedDB & MD5 Cryptography
│   ├── schema.json               # Formal Object Store Schemas & Indexes
│   └── README.md                 # Storage Layer Architecture
│
├── index.html                    # Root Seamless Entrypoint
├── login.html                    # Root Login Redirect
├── signup.html                   # Root Signup Redirect
├── README.md                     # Comprehensive Project Documentation
└── .gitignore                    # Version Control Ignore Rules
```

---

## Core Capabilities

### 1. Multi-Criteria Hazard Scoring Algorithm
Calculates a real-time **Dynamic Safety Score (0–100)** for every road corridor:
- **50% Terrain & Disaster Risk**: Landslide Susceptibility Index (LSI), cloudburst rainfall, and slope gradient.
- **30% Structural Accessibility**: Bridge tonnage limits (IRC Class 70R/40/18T), safe causeways, and all-weather pavement.
- **20% Route Quality**: Asphalt smoothness, gentle curves, and convoy travel efficiency.

### 2. 24-Sector Granular Segment Risk Telemetry
Visualizes highway sectors with color-coded safety indicators:
- **Low Risk (Green)**: Optimal road surface, gentle grade (<6%), all-weather bridge clearance.
- **Moderate Risk (Amber)**: Valley bypass sections, winding grades, minor seasonal waterlogging.
- **High Risk (Red)**: Steep hairpins (>12%), active rockfall zones, weak timber bridges, flood submergence.

### 3. Rapid 1-Click SOS Emergency Protocol
- **1-Click Trigger**: Single tap launches an urgent 5-second cancellable audio-visual countdown.
- **Zero-Touch Automated Dispatch**: If not cancelled, automatically sends live GPS coordinates and Google Maps distress links to parents, police station, and emergency teams, and triggers an emergency call to `112`.

### 4. 11 Regional Languages & Voice Navigation
Full localization and Web Speech audio navigation across 11 Northeast languages:
English, Assamese (অসমীয়া), Bengali (বাংলা), Hindi (हिन्दी), Manipuri (ꯃꯩꯇꯩꯂꯣꯟ), Mizo, Khasi, Garo (A·chik), Bodo (बड़ो), Nepali, and Nagamese.

### 5. 100% Offline Capability (PWA & IndexedDB)
- **IndexedDB (`SafePassNER_DB`)**: Securely stores commuter profiles, emergency contacts, and dispatch logs on-device.
- **RFC 1321 MD5 Hashing**: Irreversible password hashing protecting user credentials locally.
- **Service Worker PWA**: Caches application assets for offline use in zero-connectivity mountain valleys.

---

## Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Responsive Tactical HUD Theme), JavaScript (ES6+ Vanilla)
- **GIS & Mapping**: MapLibre GL, Leaflet, OSRM Routing Engine
- **Storage & Security**: Client-Side IndexedDB (`SafePassNER_DB`), RFC 1321 MD5 Hashing
- **APIs**: HTML5 Web Speech Synthesis API, Geolocation API, Service Worker Cache API
- **Deployment**: GitHub Pages (Edge CDN, SSL Enabled)

---

## Quick Links

- **Live App**: [https://sathish-08-x.github.io/SafePass-NER/](https://sathish-08-x.github.io/SafePass-NER/)
- **GitHub**: [https://github.com/Sathish-08-x/SafePass-NER](https://github.com/Sathish-08-x/SafePass-NER)
- **Author**: Sathish Gudipudi ([@Sathish-08-x](https://github.com/Sathish-08-x))
