---
layout: page
icon: fas fa-tag
order: 2
title: "Smart Safety Seat"
---

## Background Info
I have made a car seat which can absorb a portion of the impact during a collision and save drivers and passengers from fatal accidents. The seat is not fixed to the ground, instead it is connected to a rail which is mechanically supported by springs that engage during an accident. During a sudden stop the driver will expereince a big impulse due to their inertia, the smart safety seat will provide the passengers with more time to stop their forward moving velocity. This means the impulse of the collision experienced by the passengers will be less. instead of having 1 second to absorb the impact, the passenger will have 2 seconds which is double the time and half the impact per second of the original accident. 

<!---Below is the Smart Seat Prototype Video--->
[![Smart Safety Seat Prototype Video](\assets\img\Smart-Seat\Smart Saefty Seat Video.png)](https://youtu.be/tbnBGMlRg1M "Smart Safety Seat Prototype Video")
*Video 1: Smart Safety Seat Prototype Video* 
{: .text-center}

# Final Prototype

Front Angle             |  Rear Angle
:-------------------------:|:-------------------------:
![](\assets\img\Smart-Seat\Low Front.jpg)   |  ![](\assets\img\Smart-Seat\Rear Angle.jpg)
Underneath the Rail        |  Typical Debugging Session
:-------------------------:|:-------------------------:
![](\assets\img\Smart-Seat\Under Rail.jpg)   |  ![](\assets\img\Smart-Seat\Debugging.jpg)

This project continuously forces me to learn a lot of mechanical, electrical, and embedded systems concepts. I am extremely passionate about all kinds of engineering streams and really like working on such multi-disciplinary projects. Below I have included more in-depth documentation regarding the following areas:
1. Mechanical Work
2. Electrical Work
3. Software/Embedded Systems 

# Mechanical Work
## Axle Shaft to Seat Connector
This mechanical component is responsible for making a connection between the moving shaft and the seat.
![](\assets\img\Smart-Seat\Motor Shaft Connector.png)
*Figure 2: Axle Shaft to Seat Connector* 

## Motor Mount
This is the Nema 23 Motor Mount which connects the stepper motor to the Axle Shaft.
![](\assets\img\Smart-Seat\Motor Mount.png)
*Figure 3: Motor Mount* 

Motor to Axle Connector    |  Motor Mount
:-------------------------:|:-------------------------:
![](\assets\img\Smart-Seat\Motor to axle made.jpg)   |  ![](\assets\img\Smart-Seat\Motor mount made.jpg)

The two mechanical objects above are hand-made by myself. I have followed the Engineering Drawings in Figures 2 and 3 that I've made above as a reference while building. 

### Video of the first working product
[![Stepper Motor to Car Seat Connection](\assets\img\Smart-Seat\Video image of nema 23.png)](https://youtu.be/u4cBsZgghC4 "Stepper Motor to Car Seat Connection")
*Video 2: Smart Safety Seat Prototype Video* 

# Electrical Work

Below are the critical components used to build my prototype.

Stepper Motor                                     |  Lidar Sensor
:------------------------------------------------:|:------------------------------------------------:
![](\assets\img\Smart-Seat\Motor and Driver.png)  |  ![](\assets\img\Smart-Seat\Lidar Sensor.png)
Microcontroller                                   |  AC to DC converter & 120V to 24V Step Down
:------------------------------------------------:|:-------------------------------------------------:
![](\assets\img\Smart-Seat\Microcontroller.png)   |  ![](\assets\img\Smart-Seat\Power Supply.png)

- Nema 23 Stepper Motor (Good for precision and power)
- Luna Lidar (good up to 8 meters, chose this component due to cheap price: $40)
- Arduino Mega (Chose this due to its number of GPIO pins and power)
- Power Supply (Didn't want to spend a lot of money to build a battery pack, so I chose to use the wired method)

### Notes/Specifications of the Electrical Setup
<!-- Below is a PDF embeddedin HTML (Altium Design) -->
<object data="\assets\img\Smart-Seat\Electrical Setup Notes.pdf" type="application/pdf" width="800px" height="700px"></object>
*Document 1: Rough electrical setup notes* 
{: .text-center}

# Software
##### [**Click Here to See The Full Arduino Code in C/C++**](https://github.com/Grigor-Pahlevanyan/Public_Repo/blob/main/Smart_Safety_Seat/Full_code_2.0/Full_code_2.0.ino)
{: .text-center}

# Areas of Improvement
1. Using AI image processing with 3D depth cameras instead of Lidar Sensors.
2. Use a single board computer instead of a mictrocontroller to handle more data from 3D cameras.
3. Use a more powerful motor, for example servo moror. The stepper motor is great, but a little bit slow.
