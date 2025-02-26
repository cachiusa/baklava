# Android Keystore
The Android Keystore provides hardware-backed cryptographic key management services through a Hardware Abstraction Layer (HAL)

The Keystore exposes an API to Android applications, including cryptographic key generation, secure key storage, and key usage (e.g., encryption or signing actions).

## Keymaster / KeyMint
Keymaster Trusted Application (TA) is a HAL

### StrongBox
StrongBox refers to devices such as
- embedded Secure Elements (eSE)
- on-SoC secure processing units (iSE)

Android 9 or higher can have a StrongBox Keymaster, an implementation of the Keymaster/Keymint HAL that resides in a StrongBox device.

Although StrongBox is a little slower and resource constrained compared to TEE, StrongBox provides better security guarantees against physical and side-channel attacks.

When StrongBox isn't available, an app can always fall back to TEE to store key materials.

---
https://source.android.com/docs/security/features/keystore
https://developer.android.com/privacy-and-security/keystore
https://github.com/shakevsky/keybuster
https://www.usenix.org/system/files/sec22-shakevsky.pdf