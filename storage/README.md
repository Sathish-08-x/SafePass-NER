# SafePass-NER // Storage & Database Layer

This directory houses the offline persistence, local database models, and cryptographic authentication engine for SafePass-NER.

## Architecture

- **Engine**: Client-Side IndexedDB (`SafePassNER_DB`, Version 1)
- **Fallback**: Browser LocalStorage synchronization for ultra-low memory or legacy environments
- **Security**: RFC 1321 MD5 password hashing with client-side salt protection
- **Stores**:
  - `users`: User profiles, emergency contact numbers (Father & Mother), blood group, and hashed credentials.
  - `sos_logs`: Timestamped emergency beacon dispatches with latitude, longitude, and hazard telemetry.

## Files
- `database.js`: Pure JavaScript IndexedDB & LocalStorage synchronization module.
- `schema.json`: Formal schema declaration for all object stores and secondary indexes.
