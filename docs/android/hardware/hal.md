# Hardware abstraction layer (HAL)
Hardware abstractions are sets of routines in software that provide programs with access to hardware resources through programming interfaces.

The programming interface allows all devices in a particular class C of hardware devices to be accessed through identical interfaces even though C may contain different subclasses of devices that each provide a different hardware interface.

A HAL allows hardware vendors to implement lower-level, device-specific features without affecting or modifying code in higher-level layers.

## Hardware Interface Definition Language (HIDL)
A language used to define interfaces in a way that is independent of the programming language being used. HIDL enables communication between HAL clients and HAL services.

## Android Interface Definition Language (AIDL)
Like HIDL, but AIDL language is loosely based on the Java language.

---
https://en.wikipedia.org/wiki/Hardware_abstraction
https://source.android.com/docs/core/architecture/hal
https://source.android.com/docs/core/architecture/hidl
https://source.android.com/docs/core/architecture/aidl