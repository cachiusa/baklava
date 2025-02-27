# Android Gatekeeper
The Gatekeeper subsystem performs device pattern/password authentication in a Trusted Execution Environment (TEE).

Gatekeeper enrolls and verifies passwords via an HMAC with a hardware-backed secret key. Additionally, Gatekeeper throttles consecutive failed verification attempts and must refuse to service requests based on a given timeout and a given number of consecutive failed attempts.

When users verify their passwords, Gatekeeper uses the TEE-derived shared secret to sign an authentication attestation to send to the hardware-backed Keystore. That is, a Gatekeeper attestation notifies Keystore that authentication-bound keys (for example, keys that apps have created) can be released for use by apps.

## Architecture
### Trusted Application
The TEE counterpart of gatekeeperd. A TEE-based implementation of Gatekeeper.
### gatekeeperd
Gatekeeper daemon is a C++ binder service containing platform-independent logic and corresponding to the GateKeeperService Java interface.
### Hardware abstraction layer
The HAL interface in hardware/libhardware/include/hardware/gatekeeper.h, and the implementing module

(TBA)

---
https://android.googlesource.com/platform/system/gatekeeper/
https://source.android.com/docs/security/features/authentication/gatekeeper