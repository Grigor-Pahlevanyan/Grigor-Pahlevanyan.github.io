---
layout: page
icon: fas fa-tag
order: 1
title: "Solar Car"
---

# Power Management System

Figure 1 shows the first version of the PMS board that I have worked on along with my team members. This board is the first board on the car to turn on during the startup, it will control the sequence at which the Solar Car will turn on. Certain circuit boards will turn on before others. The phoenix connectors around the PCB connect to other boards and provide them with 12V power. 

<!---Below is the PMS Board--->
![PMS Board](\assets\PMS Board.png)

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
![Precharge Board](\assets\Solar_Car\Precharge Board.PNG)

*Figure 2: Precharge Circuit* 
{: .text-center}

Graph 1 below shows the gradual increase in power supplied to the motor controler trhough the precharge circuit. By changing the resistance of the power resistor we can increase/decrease the charge time of the motor controller. 

<!---Below is the Precharge Board--->
![Precharge Board](\assets\Solar_Car\Voltage for Precharge Circuit.png)

*Graph 1: Precharge Circuit Voltage Rise* 
{: .text-center}

Document 1 goes into depth about the specifications of the precharge circuit. It also shows the final component that was chosen for our design as it closely matches our specifications.

<!-- Below is a PDF embeddedin HTML (Power Resistor) -->
<object data="\assets\Precharge Power Resistor.pdf" type="application/pdf" width="800px" height="700px">
    <embed src="\assets\Precharge Power Resistor.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://docs.google.com/document/d/1niJh3muGLufZHii_gZgbmMTTFyquAPMx/edit?usp=sharing&ouid=101484005686296121166&rtpof=true&sd=true">Download PDF</a>.</p>
    </embed>
</object>

*Figure 3: Sample Precharge Circuit [Image from here](https://www.sensata.com/calculator/precharge)* 
{: .text-center}

## Automatic Transfer Switch (ATS) Circuit

An Automatic Transfer Switch (ATS) in simple terms is a switch which alternates from one input to another. For example, our car has 3 power supplies, the solar panels, main high voltage (HV) battery and low voltage (AUX) 12V battery. The solar panels and the main HV battery are connected together in parallel and always act synchronously, while the AUX battery acts asynchronouls with the main mattery and the solar panels. This means when the main battery and solar panels are on, the AUX is off, and vice-versa.

The ATS circuit is mainly used during the startup and shutdown process of the car. Since the AUX battery needs to turn on firs then turn off once the main battery turns on, we need an ATS circuit to automatically make that transistion. So in our case, the ATS will be used to alternate between the two power sources, AUX battery (12V) and main HV battery. The HV battery (110V) passes through a DCDC converter which drops the voltage down to 12V. This way both power supplies have the same voltage as they are contolled by the ATS circuit. 

The video below goes into depth about 3 prototypes that I have created for the ATS circuit using NI Multisim.

<!---Below is the ATS Selection--->
[![ATS Selection on NI Multisim](\assets\Solar_Car\Image of ATS Video.png)](https://www.youtube.com/watch?v=1juHLBlT9ew "ATS Selection on NI Multisim")

*Video 1: ATS Circuit Selection* 
{: .text-center}

# Solar Cells and Battery 



<!-- Below is a PDF embeddedin HTML (Electrical Architecture) -->
<object data="\assets\Solar_Car\Solar Car Electrical Architecture.pdf" type="application/pdf" width="800px" height="700px">
    <embed src="\assets\Solar_Car\Solar Car Electrical Architecture.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://drive.google.com/file/d/16gof9EuUTP6VzCcDnWPZcbqoqPK46Ygf/view?usp=sharing">Download PDF</a>.</p>
    </embed>
</object>
