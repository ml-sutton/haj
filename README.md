# Haj

![GitHub language](https://img.shields.io/github/languages/top/ml-sutton/haj) 
![GitHub license](https://img.shields.io/github/license/ml-sutton/haj) 
![GitHub issues](https://img.shields.io/github/issues/ml-sutton/haj) 
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

**Haj** is a privacy-focused mobile application concept designed for tracking **hormone replacement therapy (HRT)** doses and blood hormone levels.  
> *This project is a **portfolio piece** and is **not intended for real-world medical use. See the disclaimer below for details.*

---

## Overview

Haj empowers users to take control of their hormone tracking with features built around **security, usability, and accessibility**.  
It combines medical-style tracking, personal analytics, and strong encryption to demonstrate technical design for a health-oriented mobile app.

---

## Features

- **Dose Tracking** — Log daily, weekly, or custom hormone doses.  
- **Smart Reminders** — Push notifications for upcoming doses.  
- **Blood Level Monitoring** — Visualize hormone levels over time with charts and graphs.  
- **Adherence Insights** — Track consistency and progress with regimen analytics.  
- **Secure Data Encryption** — All user data encrypted at rest using a local key derived from a PIN and optional biometric authentication.  
- **BIP39 Recovery System** — Export and recover encrypted data with a mnemonic recovery phrase.  
- **Privacy by Design** — No cloud syncing or external data storage. All data is in the complete control of the user

---

## Tech Stack

- **Framework:** React Native with expo
- **Language:** TypeScript
- **State Management:** TBD 
- **Notifications:** TBD
- **Storage:** TBD  
- **Encryption:** BIP39-based recovery + AES (final implementation TBD)

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- Yarn or npm
- Expo CLI (if using Expo workflow)

```bash
git clone https://github.com/yourusername/haj.git
cd haj
npm install
# or
yarn install

npx expo start
# or for a native build:
npx react-native run-android
npx react-native run-ios
```
---

## Security & Privacy

Haj demonstrates **secure-by-design principles**:
- All data encrypted locally with user-controlled keys.  
- PIN lock with optional biometric login.  
- Encrypted exports restorable using a 16-word **BIP39 recovery phrase**.  
- No third-party analytics or cloud storage.

*(Encryption standard subject to change during development.)*

---

## Roadmap
Haj will follow a **security-first development approach**:

### Phase 1 – Security & Core Infrastructure
- [ ] Encrypted local database  
- [ ] Authentication with PIN and optional biometrics  
- [ ] User registration and recovery with BIP39 mnemonic  
- [ ] End-to-end encryption of all user data  

### Phase 2 – Core Hormone Tracking Features
- [ ] Dose management: add, track, delete, and reminders  
- [ ] Dosage management: add, edit, delete  
- [ ] Blood level management: add, edit, delete, and graph  

### Phase 3 – Safety & Privacy Features
- [ ] Quick Exit  
- [ ] Discrete Mode  
- [ ] Self Destruct  
- [ ] Silent Mode  

### Phase 4 – Reports & Analytics
- [ ] Weekly, monthly, and yearly report generation  
- [ ] Encrypted report storage  
- [ ] Quick access to historical reports  

---

## Disclaimer

This application is being developed **solely as a portfolio project** to showcase mobile development and data security skills.

- **Haj is not a medical product.**  
- **It must not be used to track, monitor, or manage actual medical treatments, medications, or hormone therapies.**  
- The app and its data representations are **for demonstration purposes only** and may not be accurate, reliable, or clinically safe.  
- The developer of Haj is **not responsible or liable** for any health decisions, injuries, or medical consequences arising from use or misuse of this project.  
- Always consult a **qualified healthcare professional** for any medical advice, diagnosis, or treatment decisions.

---

## Contributing

This repository is open for educational collaboration and feedback.  
If you wish to contribute code or design suggestions:

    1. Fork the repository  
    2. Create a feature branch  
    3. Submit a pull request  

---

## License

Haj is licensed under the **GPL3.0 License**.  
See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgements

Created with respect for the transgender community and a focus on privacy and digital autonomy.  
Special thanks to open-source contributors and tools that make projects like Haj possible.
