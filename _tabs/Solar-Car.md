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
![Precharge Board](\assets\Precharge Board.PNG)

*Figure 2: Precharge Circuit* 
{: .text-center}

Graph 1 below shows the gradual increase in power supplied to the motor controler trhough the precharge circuit. By changing the resistance of the power resistor we can increase/decrease the charge time of the motor controller. 

<!---Below is the Precharge Board--->
![Precharge Board](\assets\Voltage for Precharge Circuit.png)

*Graph 1: Precharge Circuit Voltage Rise* 
{: .text-center}

Document 1 goes into depth about the specifications of the precharge circuit. It also shows the final component that was chosen for our design as it closely matches our specifications. s

<!-- Below is a PDF embeddedin HTML (Power Resistor) -->
<object data="\assets\Precharge Power Resistor.pdf" type="application/pdf" width="800px" height="700px">
    <embed src="\assets\Precharge Power Resistor.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://docs.google.com/document/d/1niJh3muGLufZHii_gZgbmMTTFyquAPMx/edit?usp=sharing&ouid=101484005686296121166&rtpof=true&sd=true">Download PDF</a>.</p>
    </embed>
</object>

*Document 1: Precharge Circuit* 
{: .text-center}

## Automatic Transfer Switch (ATS) Circuit

<!---Below is the PMS Board--->
[![ATS Selection on NI Multisim](\assets\Image of ATS Video.png)](https://www.youtube.com/watch?v=1juHLBlT9ew "ATS Selection on NI Multisim")
# Solar Cells and Battery 

<!-- Below is a PDF embeddedin HTML (Solar Array) -->
<object data="\assets\Solar Array Arrangement (Website).pdf" type="application/pdf" width="800px" height="700px">
    <embed src="\assets\Solar Array Arrangement (Website).pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://docs.google.com/document/d/1SegDb1yk6t7bbe3hqcD_YXeEGmFr10wR-FJ8LDK_kkk/edit?usp=sharing">Download PDF</a>.</p>
    </embed>
</object>

<!-- Below is a PDF embeddedin HTML (Electrical Architecture) -->
<object data="\assets\Solar Car Electrical Architecture.pdf" type="application/pdf" width="800px" height="700px">
    <embed src="\assets\Solar Car Electrical Architecture.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://drive.google.com/file/d/16gof9EuUTP6VzCcDnWPZcbqoqPK46Ygf/view?usp=sharing">Download PDF</a>.</p>
    </embed>
</object>
