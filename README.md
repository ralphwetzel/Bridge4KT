# Bridge4KT
*Bridge4KT*, an app to extend the functionality of [Z-Way](https://z-wave.me/z-way/), one of the smartest controllers for Z-Wave devices, allows to bridge Z-Wave devices into any Apple HomeKit environment.

Did you know that there's a full blown HomeKit server operating silently within Z-Way? There was already an attempt to unleash it's capabilities - yet got stuck in an early stage. Others tried to bridge this gap with additional tools external to Z-Way - requiring people to maintain and align two or more software packages.

This app is my attempt to not only map Z-Wave devices, yet to integrate them as good as possible into the HomeKit world - to provide the user experience we're accustomed to operating our Apple device of choice.

Honestly it was the ultimate driver to create *Bridge4KT* (and the fact that gave this app it's name) to provide the user experience KT is expecting when she's operating our z-waved Home.

[TOC levels=2 markdown bullet formatted hierarchy]: # "## Table of Contents"

## Table of Contents
- [Disclaimers](#disclaimers)
- [Capabilities](#capabilities)
- [Installation](#installation)
- [Device Detection Process](#device-detection-process)
- [Tag Based Manipulation Language](#tag-based-manipulation-language)
- [Additional Information](#additional-information)
- [RapydScript](#rapydscript)


## Disclaimers
This app was inspired and is conceptually based on the work of Andreas Freud and his <b>Apple HomeKit Bridge</b> for Z-Way. It yet is a completely independent product.

This app is produced independently from Apple® or the Apple Home app and carries no guarantee from Apple about quality, suitability or anything else.


## Capabilities
The Apple HomeKit world knows a limited number of standard use cases that are supported in the Home apps on the various Apple operating systems. *Bridge4KT* supports a subset of these use cases yet is prepared to extend it's capabilities if there's additional user demand.

This latest version is able to bridge to the following accessories:

- Door
- Garage
- Lightbulb
- Outlet
- Programmable Switch
- Sensor
- Switch
- Thermostat
- Window
- Window Covering

Thus, if you've installed a Z-Wave device for one of these use cases, you should be able to bridge it's functionality into the Apple HomeKit world and operate it accordingly with your Apple device.

There are yet a number of capabilities being present with a Z-Wave device that are not supported (so far) by the Apple HomeKit protocol. As an example, this is valid for the capability to measure the power consumption of a device in operation. As there's no equivalent in the HomeKit world, this capability is not bridged.

## Installation
*Bridge4KT* is distributed via the *Z-Way* app store, in the category **Ext. UIs**. After installation, you'll find it in the apps directory of your *Z-Way* application.

Alteratively you could download this repository and drop it's contents under `z-way-server/automation/userModules` in a directory named `Bridge4KT`.

Don't forget to restart your server afterwards:
```
sudo service z-way-server restart
```

## Device Detection Process
Each time you **close** the app pushing the *Save* button, the device detection process will be initiated.

> This will as well create each time a new ***HomeKit Configuration Code***. You have to re-open the app to get this latest valid code necessary to integrate the bridged devices into your Home configuration. Whereas this procedure is quite annoying, it's necessary just once - to be re-done only after relevant changes to your Z-Wave network.

To avoid blindfolded guessing of capabilities - usually leading to an unpleasant user experience - *Bridge4KT* uses a staggered approach for positive device detection.

First stage is based on the vendor information coming with every device. If the device is positively identified, it's capabilities are read from a [database](devices.json) and applied accordingly.

Second stage is based on the Z-Wave type definition, as well provided by each device as part of it's pre-setting. If the type definition is recognized in the respective [database](generic.json), the predefined capabilities are as well applied.

As final stage there's a fingerprint of the device created based on it's supported Z-Wave command classes. Again, this fingerprint is compared against a small [database](fp.json), to identify it's capabilities.

>The app ships with those databases, yet they will be updated as well from this GitHub repository if your controller has internet access. This allows easy integration of additional device definitions and smooth rollout of the respective capabilities without the demand to re-install (or update) the whole app. That said: If you like to add a device into this databases (especially the first one) which is currently missing, raise an issue - and it will be integrated (as long as it's properties are supported by the existing app).

 Whereas it is quite easy to distinguish a sensor from a roller shutter, it is yet impossible to sense if this roller shutter is operating a window covering, a door or a garage (door). You may therefore manually alter the detection process and even overwrite the database provided capability information by means of a [Tag Based Manipulation Language](#tag-based-manipulation-language).

The result of the detection process will be displayed within the app in the section *Detected Configuration*:

For each device installed you'll get the following information:

`Given Name`: `Vendor Data` / `Z-Way Type Definition` / `Fingerprint` / `Tag Language` >> `Result of the detection process`: `Applied Capabilities`

If the result shown does not fit your expectation, you may define the appropriate tags to manipulate the detection process.

## Tag Based Manipulation Language
*Bridge4KT* understands a number of modifiers provided as a tag of a virtual device to alter the capability detection process. Some of those are generic, some dedicated to a very special use case.

Each modification tag has to be prepended by `B4KT:` to indicate that this is something dedicated to *Bridge4KT*:

The following tags may be applied to **any virtual device belonging to the physical device** who's capability detection process shall be modified:

| Tag Definition|Example|Use Case|
|:----|:---|:---|
|B4KT:*Capability*|`B4KT:TemperatureSensor`| To add the capability *TemperaturSensor* to a device|
|B4KT:*Capability*:Primary|`B4KT:TemperatureSensor:Primary`| To add the capability *TemperaturSensor* as the primary capability of a device|
|B4KT:*Capability*:Skip|`B4KT:TemperatureSensor:Skip`| To remove the capability *TemperaturSensor* (most probably pre-defined via the device database) from the list of capabilities of a device|

The following tags have to be applied to **the virtual device that shall be used** for the dedicated capability.

| Tag Definition|Use Case|
|:----|:---|
|`B4KT:Slat:Horizontal`| To define that this virtual device is used to operate a horizontal slat|
|`B4KT:Slat:Vertical`| To define that this virtual device is used to operate a vertical slat|
|`B4KT:Slat:Minus90`| To define that the slat operated by this virtual device has a tilt angle of 0° to -90°|
|`B4KT:Slat:Plus90`| To define that the slat operated by this virtual device has a tilt angle of 0° to +90°|
|`B4KT:Slat:Swing`| To define that the slat operated by this vertical device is a *swinging* slat|


## Additional Information
This section tries to provide some additional information that might be suitable to support you in your endeavours to setup *Bridge4KT* accordingly. If you're missing any detail or if you have further questions, please [raise an issue](https://github.com/ralphwetzel/Bridge4KT/issues) for clarification.

### Battery Devices
To forward the battery status of battery driven devices, you may add *BatteryService* as additional capability tag to your devices definition: `B4KT:BatteryService`

### Door
Refer to [Motor Control Device](#motor-control-device)

### Garage
Refer to [Motor Control Device](#motor-control-device)

### HomeKit Configuration Code
Refer to [Device Detection Process](#device-detection-process)

### Motor Control Device
Z-Way *Motor Control Devices* (MCDs) can be bridged to a number of different capabilities. The Apple HomeKit protocol differentiates between `Door`, `Garage`, `Window` and `WindowCovering`.

*Bridge4KT* defaults to `WindowCovering`. You may apply an appropriate tag definition to change this e.g. for `Door`: `B4KT:Door:Primary`, `B4KT:WindowCovering:Skip`

Over the last years the capabilities provided by MCDs continously grew and improved. Thus there're different types of MCDs on the market, each one with a modified set of functionality. *Bridge4KT* provides dedicated implementations to adequately support each of the different types of MCDs.

#### Motor Control Device (C)
MCD(C) devices are - out of the box - aware of their current position and report endpoints. You may get even better position reporting after calibration of the device.

If you operate a venetian blind by an appropriate MCD(C), you may as well get support to control the slat position by application of the [necessary tag definition](#tag-based-manipulation-language).

#### Motor Control Device (B)
MCD(B) devices are - out of the box - only aware of the endpoints. They demand calibration to support position reporting - and prior to accept *target-position-in-between* commands. Thus, if your MCD(B) behaves a little bit strage, it could help to perform a calibration run.

#### Motor Control Device (A)
MCD(A) devices are - out of the box - neither aware of the endpoints nor position. Nevertheless there's code implemented to provide adequate user experience even for those devices.

#### Simple Window Covering
Devices advertising the type *Simple Window Covering* are as well supported by *Bridge4KT*.

### Roller Shutter
Most devices suitable to operate a motor are advertised and sold as *Roller Shutter* as this is one of the most obvious use cases. In the end, they are capable to support a number of different activities, like opening / closing a garage or a motorized door.

Refer to [Motor Control Device](#motor-control-device)

### Sensors
The following sensor types are supported:
- CarbonDioxideSensor
- CarbonMonoxideSensor
- ContactSensor
- LeakSensor
- MotionSensor
- SmokeSensor
- TemperatureSensor

If you operate a sensor supporting multiple types, you may add those as a capability by adding a dedicated tag, e.g. `B4KT:TemperaturSensor`.

### Window
Refer to [Motor Control Device](#motor-control-device)

### WindowCovering
Refer to [Motor Control Device](#motor-control-device)

## RapydScript
*Bridge4KT* is written using [RapydScript NG](https://github.com/kovidgoyal/rapydscript-ng) , a "transpiler for a Python like language to JavaScript".

I'd like to express a sincere "Great Job!" to [@kovidgoyal](https://github.com/kovidgoyal) for his efforts to maintain this excellent piece of software. It took away much of what I consider as ugliness when working with JavaScript - and allowed me to create a nicely structured easily extendable application.

To compile the [sources](source) into the JavaScript code demanded by Z-Way, there's a [small Python script](source/compile.py) provided.

