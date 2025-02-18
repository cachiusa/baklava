# Android Keystore
The Android Keystore provides hardware-backed cryptographic key management services through a Hardware Abstraction Layer (HAL)

The Keystore exposes an API to Android applications, including cryptographic key generation, secure key storage, and key usage (e.g., encryption or signing actions).

## Daemon
The keystored holds the following responsibilities:
– Expose the binder interface, listen and respond to requests made by applications.
– Manage the application keys. The daemon creates a directory on the filesystem for each application; the key-blobs are stored in files in the application’s directory. Each key-blob file is encrypted with a key-blob encryption key (different per application) which is saved as the masterkey in the application’s directory. The masterkey file itself is encrypted when the device is locked, and the encryption employs the user’s password and a randomly generated salt to derive the masterkey encryption key.
– Relay cryptographic function calls to the Keymaster HAL device 

## Keymaster/KeyMint
### HAL
The Keymaster HAL is an interface between Android and the vendor-specific Keymaster implementation. The Android documentation provides reference guidelines for implementers of Keymaster HALs.

It is implemented in the Android user mode and communicates with the Keymaster TA using kernel drivers and World Shared Memory buffers.

### Trusted Application
Keymaster TA is the software running in a secure context, most often in ARM TrustZone, that provides all of the secure Keystore operations, has access to the raw key material, validates all of the access control conditions on keys, etc.

## StrongBox
StrongBox refers to devices such as
- embedded Secure Elements (eSE)
- on-SoC secure processing units (iSE)

StrongBox Keymaster is an implementation of the Keymaster/Keymint HAL that resides in a StrongBox device.

Although StrongBox is a little slower and resource constrained compared to TEE, StrongBox provides better security guarantees against physical and side-channel attacks.

When StrongBox isn't available, apps can always fall back to TEE to store key materials.

## Key Attestation
Keystore Key Attestation allows remote parties to verify that a key was generated within the secure hardware by having the Keymaster TA generate a certificate chain whose root certificate is Google (or Samsung, for applications such as KNOX attestation).

---
https://source.android.com/docs/security/features/keystore
https://developer.android.com/privacy-and-security/keystore
https://github.com/shakevsky/keybuster
https://www.usenix.org/system/files/sec22-shakevsky.pdf
https://eprint.iacr.org/2018/621.pdf
