---
layout: page
icon: fas fa-tag
order: 1
title: "Solar Car"
---

# Power Management System

Figure 1 shows the first version of the PMS board that I have worked on along with my team members. This board is the first board on the car to turn on during the startup, it will control the sequence at which the Solar Car will turn on. Certain circuit boards will turn on before others. The phoenix connectors around the PCB connect to other boards and provide them with 12V power. 

<!---Below is the PMS Board--->
![PMS Board](\assets\img\Solar-Car\PMS Board.png)
*Figure 1: Power Management System Board (1st version)* 
{: .text-center}

The PMS board controls the following boards:
- Pedal Control Board
- Battery Management System
- Low Voltage (Lights)
- Driver Display
- Data Aquisition
- The list goes on...

## Precharge Circuit

Our Solar Car runs from 96V - 110V. When using any kind of contactors/relays to control power going towards the motor controller, it is important to use a precharge circuit. The precharge circuit is essentially an RC circuit which ensures the voltage doesn't jump from 0 to 110V but instead it gradually goes up. The motor controller has internal capacitance and the precharge circut has a large resistor which can handle 600W. Together they form an RC circuit. 

<!---Below is the Precharge Board--->
![Precharge Board](\assets\img\Solar-Car\Precharge Board.PNG)
*Figure 2: Precharge Circuit* 
{: .text-center}

<pre>
</pre>

Graph 1 below shows the gradual increase in power supplied to the motor controler trhough the precharge circuit. By changing the resistance of the power resistor we can increase/decrease the charge time of the motor controller. 

<!---Below is the Precharge Board--->
![Precharge Board](\assets\img\Solar-Car\Voltage for Precharge Circuit.png)
*Graph 1: Precharge Circuit Voltage Rise* 
{: .text-center}

<pre>
</pre>

Figure 3 below shows a simple diagram of the scenario for the precharge circuit. The precharge circuit is at the top where the "short" and "power resistor" lines are in parallel. The "system load" is the motor controller. In our case, it is can be represented only by the capacitor symbol with a capacitance of 3200uF. This capacitance needs to be discharged as per the regulations of the American Solar Car Challenge 2024. For this reason, we have also implemented a "discharge circuit". The discharge circuit is much simpler than the precharge circuit as it will not have as much power passing through it during discharge. 

<!---Below is the Precharge Board--->
![Sample Precharge Circuit](\assets\img\Solar-Car\precharge.png)
*Figure 3: Sample Precharge Circuit [Reference](https://www.sensata.com/calculator/precharge)* 
{: .text-center}

<!---Link to documentatoin--->
My in-depth documentation regarding power resistor selection for the precharge circuit can be found [here](https://docs.google.com/document/d/1niJh3muGLufZHii_gZgbmMTTFyquAPMx/edit?usp=sharing&ouid=101484005686296121166&rtpof=true&sd=true)

## Automatic Transfer Switch (ATS) Circuit

An Automatic Transfer Switch (ATS) in simple terms is a switch which alternates from one input to another. For example, our car has 3 power supplies, the solar panels, main high voltage (HV) battery and low voltage (AUX) 12V battery. The solar panels and the main HV battery are connected together in parallel and always act synchronously, while the AUX battery acts asynchronouls with the main mattery and the solar panels. This means when the main battery and solar panels are on, the AUX is off, and vice-versa.

The ATS circuit is mainly used during the startup and shutdown process of the car. Since the AUX battery needs to turn on firs then turn off once the main battery turns on, we need an ATS circuit to automatically make that transistion. So in our case, the ATS will be used to alternate between the two power sources, AUX battery (12V) and main HV battery. The HV battery (110V) passes through a DCDC converter which drops the voltage down to 12V. This way both power supplies have the same voltage as they are contolled by the ATS circuit. 

The video below goes into depth about 3 prototypes that I have created for the ATS circuit using NI Multisim.

<!---Below is the ATS Selection--->
[![ATS Selection on NI Multisim](\assets\img\Solar-Car\Image of ATS Video.png)](https://www.youtube.com/watch?v=1juHLBlT9ew "ATS Selection on NI Multisim")
*Video 1: ATS Circuit Selection* 
{: .text-center}

# Solar Cells and Battery 

Figure 4 below shows the area where we can place our solar cells. We had to be very careful when deciding where to place our solar cells for a few reasons. 
1. You can't use 1 big solar array because the side that has the least amount of sunshine (voltage) will greatly reduct the efficientcy of the whole array.
2. Due to point 1, we need to use many arrays. Each array needs to cover an area of a similar incline, meaning same angle. This way the shadow will be constant.
3. Each array needs a "Maximum Power Point Tracker" (MPPT) which maximizes the power from the solar cells. It will also match the battery voltage.
4. MPPTS are very expensive ($2500 USD). So we need to maximize efficincy AND minimize cost as much as possible. We can't have every solar cell with its own MPPT.

<!---Below is the Solar Cell Grids--->
![Solar Cell Grids](\assets\img\Solar-Car\Solar Grid.png)
*Figure 4: Solar Cell Grid* 
{: .text-center}

With the 4 points mentioned above, we have come up with the solar cell arrangement shown below. As you can see, the cells narrow down towards the lower back of the car as the body of the vehicle has "shoulders" which can create shadows shwn the sun in at an angle during the race and not pointing from the very top. 

<!---Below is the Solar Cell Grids--->
![Solar Array Arrangement](\assets\img\Solar-Car\solar arrangement.png)
*Figure 5: Solar Cell Arrangement* 
{: .text-center}

> **Note:** the red line represents the center line, while the orange lines outline the solar arrays.
{: .prompt-info }
<pre>
</pre>
Table 1 below shows the calculations used for determining the arrangement of the solar cells.

|     Sections     |     Cell Count     |     Approximate Voltage     |
|:----------------:|:------------------:|:---------------------------:|
|        1         |         70         |           42.84 V           |
|        2         |         70         |           42.82 V           |
|        3         |         42         |           25.70 V           |
|       Hood       |         50         |           30.6 V            |
|  Total - Hood    |         182        |           110.40 V          |
|  Total + Hood    |         232        |           141.98 V          |

*Table 1: Solar Cell Voltage Calculations* 
{: .left-center}

# Electrical Architecture

Below is a very high level electrical architecture of the main power system. In this drawing, the PCBs are simplified to boxes and the key point is to highlight the routing. So how the components, PCBs, CANbus, batteries, microcontroller, etc. will be connected to each other, at what order and how that will impact the whole car. 

One of the challenges was to set up the system in such a way, that you could have an emergency stop button "E-stop" that would turn off the whole car a press of a single button. The difference between this and the regular stop button is that the regular button registers the command from the user to turn off the car in the microcontroller, while the e-stop is a direct mechanical switch. The benefit of the automated swithc is that it ensures the car properly turns off, everything shuts down at a specified order and the motor controller can be discharged. While the e-stop forcefully turns everything off mechanically, which is very useful in cases of emergency, however it shouldn't be used for regular instances. 

<!---Below is the Precharge Board--->
![Electrical Architecture](\assets\img\Solar-Car\Electrical Architecture.png)
*Figure 6: High Level Electrical Architecture* 
{: .text-center}

# Altium Design of the Power Management System

Below is my latest iteration of the PMS board schematic. At the top left corner is the microcontroller (MCU) with all the connections that interact with the rest of the circuits. At the bottom left corner is the precharge circuit. At the bottom right corner is the circuit for the AUX battery. Above that is the discharge circuit, and at the top right corner is the remains of the ATS circuit. Unfortunately the regulations of the race have changed since the start of my work and much of my work is starting all over again. For example, the ATS which I've spoken about previously is no longer needed and we will use the main battery in parallel with the solar panels all to power 95% of the car at all times. The Aux battery will only be used for the horn, radio and non-major additional features. As you can see on the top right corner, the main battery which is then dropped down to 12V will power all of those boards on the right.

<!-- Below is a PDF embeddedin HTML (Altium Design) -->
<object data="\assets\img\Solar-Car\Altium_design.pdf" type="application/pdf" width="800px" height="700px"></object>
*Figure 7: Altium Designer Schematic* 
{: .text-center}

<object data="\assets\img\Solar-Car\Altium_design.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="\assets\img\Solar-Car\Altium_design.pdf">
        <p>This browser does not support PDFs.</p>
    </embed>
</object>