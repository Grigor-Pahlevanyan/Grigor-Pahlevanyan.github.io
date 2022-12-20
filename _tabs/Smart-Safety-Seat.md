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

This project continuosly forces me to learn a lot of mechanical, electrical and embedded systems concepts. I am extremely passionate about all kinds of engineering streams and really like working on such multi-discplinary projects. Below I have included more in-depth documentation regarding the following areas:
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

The two mechanical objects above are hand-made by myself. I have followed the Engineering Drawings in figure 2 and 3 that I've made above as reference while building. 

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
- Power Supply (Didn't want to spend a lot of money to build a battery pack, so chose to use wired method)

### Notes/Specifications of the Electrical Setup
<!-- Below is a PDF embeddedin HTML (Altium Design) -->
<object data="\assets\img\Smart-Seat\Electrical Setup Notes.pdf" type="application/pdf" width="800px" height="700px"></object>
*Document 1: Rough electrical setup notes* 
{: .text-center}

# Software

#### Arduino Main Code C/C++

```c++
#include <AccelStepper.h>
#include <TFMPlus.h>                          // Include TFMini Plus Library v1.5.0
TFMPlus tfmP;                                 // Create a TFMini Plus object

//Initialize Variables________________________________________
const int stepsPerRevolution = 400;           // change this to fit the number of steps per revolution
AccelStepper stepper(1,8,9);
int led1 = 5;                                 // Green LED
int led2 = 6;                                 // Red LED
bool toggle = true;                           // Led is on when true, off when false
enum condition{GOOD, EMERGENCY, FINISH};      // A new type instead of using integers
condition system_state = GOOD;                // Either scanning or triggered
int16_t tfDist = 10000;                       // Distance to object in centimeters
int16_t tfDist1 = 0;                          // Distance to object in centimeters
int16_t tfDist2 = 0;                          // Distance to object in centimeters

void setup(){
  
  //LIGHTS CONFIGURATION_______________________________________
  pinMode(led1, OUTPUT);                      // Green led setup
  pinMode(led2, OUTPUT);                      // Red Led setup

  //STEPPER CONFIGURATION_______________________________________
  stepper.setMaxSpeed(5000);        // Speed = Steps/Second
  stepper.setAcceleration(5000);    // Acceleration = Steps/(second^2)
  stepper.disableOutputs();         // Disable outputs -> motor won't get hot 
  stepper.setCurrentPosition(0);  

  //TIMER1 CONFIGURATION________________________________________
  TCCR1A = 0;                                 // Set entire TCCR1A register to 0
  TCCR1B = 0;                                 // Same for TCCR1B
  TCNT1  = 0;                                 // Initialize counter value to 0
  
  // Set The Output Compare Register
  OCR1A = 4999;                               // An iterupt will occur once the timer overflows on the OCR value
  
  // turn on CTC mode
  TCCR1B |= B00000100;                        // (1 << WGM12);//B00000100; 
   
  // Set CS12 and CS10 bits for 1024 prescaler
  TCCR1B |= (1 << CS12) | (1 << CS10);        // 16*10^6)/(1024) - 1 = 15.624kHz instead of 16MHz
  
  // enable timer compare interrupt
  TIMSK1 |= B00000010;                        // (1 << OCIE1A); //B00000010; 

  //STEPPER CONFIGURATION_____________________________________________________
  //myStepper.setSpeed(60);                     // Sets the motor speed in rotations per minute (RPMs)
                                              // This function doesn't make the motor turn  

  //LIDAR CONFIGURATION________________________________________________________
  Serial2.begin(115200);                      // Initialize TFMPLus device serial port.
  delay(20);                                  // Give port time to initalize
  tfmP.begin( &Serial2);                      // Initialize device library object and...
                                              // pass device serial port to the object.
  delay(1000);                                 // And wait for half a second. (give lidar time to collect data)
 
  sei();                                      //allow interrupts
}

// Timer1 interupt for the signal LEDs_________________________________________
ISR(TIMER1_COMPA_vect){
  TCNT1 = 0;                                  // This is an important piece of the interupt
  if(system_state == GOOD){                   // If system is in scanning mode, blink green LED
    toggle = !toggle;
    digitalWrite(led1, toggle);               // Toggle green LED
  }
  
  else if(system_state == EMERGENCY){         // Otherwise, in active/triggered mode blink red LED
    toggle = !toggle;
    digitalWrite(led1, LOW);                  // Turn green LED off
    digitalWrite(led2, toggle);               // Toggle red LED
  }
  else{
    digitalWrite(led1, LOW);                  // Turn green LED off
    digitalWrite(led2, LOW);                  // Turn red LED off
  }
}

void loop(){
// LIDAR SCANNING__________________________________________________________
  if(system_state == GOOD){
    tfmP.getData(tfDist1);       // Get initial distance from the LiDAR.
    delay(20);                   // Loop delay to match the 20Hz data frame rate (change back to 50), note delay(1000) == 1 second
    tfmP.getData(tfDist2);       // Get final distance from the LiDAR.
    delay(20);                   // Loop delay to match the 20Hz data frame rate (change back to 50)
  }

  // Speed relative to the car in front and relative distance
  if(system_state == GOOD && (tfDist1-tfDist2)/0.02 >= 400 && tfDist > 500){   //(dist2 - dist1)/0.02 == 1111.1cm/s which is 40km/h (5 meters now)
    system_state = EMERGENCY;
 }

 // Emergency Stepper______________________________________________________
  if(system_state == EMERGENCY){
    stepper.enableOutputs();            // Enables the pins
    stepper.runToNewPosition(9500);     // 9500
    stepper.run();                      // Move 1 step per clock cycle
    delay(3000);
    stepper.setMaxSpeed(2000);          // Speed = Steps/Second
    stepper.setAcceleration(200);       // Acceleration = Steps/(second^2)
    stepper.runToNewPosition(0);
    stepper.run();                      // Move 1 step per clock cycle
    system_state = FINISH;
  }

  if(system_state == FINISH){
    stepper.disableOutputs();           // Disable outputs -> motor won't get hot 
  }
}
```

# Areas of Improvement
1. Using AI image processing with 3D depth cameras instead of Lidar Sensors.
2. Use a single board computer instead of a mictrocontroller to handle more data from 3D cameras.
3. Use a more powerful motor, for example servo moror. The stepper motor is great, but a little bit slow.
