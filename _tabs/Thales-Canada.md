---
layout: page
icon: fas fa-tag
order: 3
title: "Thales Canada"
---

<!---Below is Thales Railways Intro Video--->
[![Thales Railways Signaling Solutions](\assets\img\Thales\Thales_train.jpg)](https://www.youtube.com/watch?v=NjtW-9l-oNA "Thales Railways Signaling Solutions")
*Video 1: Thales Railways Signaling Solutions* 
{: .text-center}

Thales is a leading industry company that is the first to create autonomous trains. Their work can be found from Toronto TTC and GO Trains to Singapore, China, France, and all over Europe. They focus on railway communications and signaling which can make the railways a more comfortable, faster, and more convinient method of travel for everyone. 

## **Component Engineering COOP (16 Months)**

Component Engineering is a very niche area for engineers, and it has taught me many critical skills that will benefit me no matter what engineering field I choose to pursue. Design engineers often focus too much on the design of the product while neglecting the limitations of the components used in their design. In the eyes of design engineers, the components used for their design are perfect just like the theories that govern their behavior. However, as a component engineering intern, I began to understand that the components used in a design are just as important as the design itself because one can create a great design but if there are no components that can support the design then the design has no value. 

### **Main Tasks for My Role**
1. Worked with engineers from different disciplines
2. Managed the component database on SAP
3. Created components in our database and worked on "ECNs" (Engineering Change Notices)
4. Worked on Shared Palma and a custom database for Thales called TCIS
5. Managed notices from manufacturers on product obsolescence and discontinuation
6. Reached out to manufacturers to get engineering drawings or specifications related to specific custom parts

### **Additional Tasks That I Pursued**
1. Created software using **Selenium Library** in Python to automate the process of repetitive work on our web-based database.
2. Created another software using **PyAutoGIU** to automate the process of repetitive tasks on the "General User Interface (GUI)".
3. Helped with debugging for the software team. Helped them with test cases for modules and learned about safety measures. 
4. Worked on a Linux/Unix-based environment and used SSH to communicate between two modules through the network using IP addresses.
5. Cleared the "Error Log" for most components in the local SAP database. (Error log is the collection of parts that have inaccurate information)

### **Problems & My Solutions**

<!---Below is the table our team problems and my solutions. Used an online table maker to generate the text.--->

|     Problems             |     My Solution     |
|--------------------------|---------------------|
| 1. We have 2 component databases with over 50,000<br>components that must be synchronized at all <br>times. When new parts are created in one they<br>are automatically created in the other as long<br>as a specific box is checked. Unfortunately,<br>for various reasons some parts were only created<br>in one database for many years. This issue has<br> led to **8,000+** parts being out of sync. <br>This issue could only be resolved by manual <br>labor and no automation was present. | - Using my knowledge in Python, I figured out how to use <br>the **"Selenium Library"** and created a software that <br>extracted all the **8000+** parts from an Excel Sheet<br>and individually filled out the information, description, and <br>took all the necessary steps to synchronize the two <br>databases. This included parsing a website, navigating, <br> and making decisions based on certain criteria presented<br>during the parsing of the website. <br>-The program saved hundreds of hours of manual labor <br>from 7 full time employees.  |
| 2. During a mass upload of component parts to one<br>of our databases many years ago, there was an <br>incident where **880** parts were duplicated. The <br>duplicates were then manually deleted and needed<br>notes and comments along with other information<br>to be filled into SAP in order to be valid. This<br>meant that our team had to do a lot of manual <br>labor distracting us from our priority tasks.                                                                                 | - I explored new ways to automate a non-web-based database<br>(SAP). I discovered the **"PyAutoGUI"** Library in Python.<br>Using that library I was able to program all of the steps<br>that I would take to make those changes. I programmed all<br>of the clicks, user inputs, shortcuts, and navigation <br>parameters to mimic a real user. Again I had to program to<br>extract **880** parts from an Excel sheet using **"openpyxl"**<br>Library in Python.                                                                                         |

<!--------------------------------------------------------------------------------------------------------------------->

## Reference to the software

[Automated Synchronizing Software (Selenium)](https://github.com/Grigor-Pahlevanyan/Public_Repo/blob/main/COOP%20Projects/Grigoporter_2.2_Selenium.py)

[Automated SAP database information filler (PyAutoGUI)](https://github.com/Grigor-Pahlevanyan/Public_Repo/blob/main/COOP%20Projects/Automated_SAP_Filler.py)

[Automated SAP Internal Comments (PyAutoGUI)](https://github.com/Grigor-Pahlevanyan/Public_Repo/blob/main/COOP%20Projects/Automated_SAP_Descriptions.py)
