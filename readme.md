
# GST Calculator

Single-Page GST Calculator Website Description
Overview
This single-page website provides a simple and intuitive interface for calculating GST (Goods and Services Tax) based on a user-provided amount and GST percentage. It performs two calculations:

Add GST: Calculates the GST amount and the total GST-inclusive value from a given amount before GST.
Subtract GST: Calculates the GST amount and the GST-exclusive value from a given amount that includes GST.

The website is built using HTML, JavaScript, and Tailwind CSS for a clean, responsive design. It ensures accurate calculations and a user-friendly experience.
Features

Input Fields:
A field to enter the monetary value (amount).
A field to enter the GST percentage (e.g., 18 for 18%).


Calculations:
Add GST:
Displays the original value (Value Before GST).
Calculates and displays the GST amount (Calculated GST).
Displays the total amount including GST (GST Inclusive Value).


Subtract GST:
Displays the original value (Value Including GST).
Calculates and displays the GST amount subtracted (Subtracted GST).
Displays the amount excluding GST (GST Exclusive Value).




Responsive Design: The layout is mobile-friendly and adapts to different screen sizes using Tailwind CSS.
Real-Time Updates: Calculations are updated instantly as the user inputs values, with input validation to ensure valid numbers.
Clear Output: Results are displayed in a well-organized format below the input fields.

Technical Details

Frontend:
HTML: Provides the structure for input fields, labels, and output display.
JavaScript: Handles input validation, GST calculations, and dynamic updates to the output fields.
Tailwind CSS: Used for styling to create a modern, clean, and responsive UI.


Calculations:
For Add GST:
GST Amount = (Value Before GST × GST Percentage) / 100
GST Inclusive Value = Value Before GST + GST Amount


For Subtract GST:
Subtracted GST = Value Including GST × (GST Percentage / (100 + GST Percentage))
GST Exclusive Value = Value Including GST - Subtracted GST




Input Validation:
Ensures the amount and GST percentage are positive numbers.
Displays an error message if invalid inputs are provided (e.g., negative numbers, non-numeric values).


Output Format:
All monetary values are formatted to two decimal places for clarity (e.g., $100.00).
Results are grouped into two sections: "Add GST" and "Subtract GST" for easy reading.



User Interface

Header: A title such as "GST Calculator" in bold, centered text.
Input Section:
Two input fields: one for the amount and one for the GST percentage.
Labels clearly indicate the purpose of each field (e.g., "Enter Amount" and "GST Percentage (%)").
A "Calculate" button (optional, as calculations can be real-time).


Output Section:
Divided into two parts: "Add GST" and "Subtract GST".
Each part displays the three required outputs (e.g., Value Before GST, Calculated GST, GST Inclusive Value for "Add GST").
Outputs are styled with Tailwind CSS for readability (e.g., bold labels, bordered sections).


Styling:
Clean, minimalistic design with a light background and contrasting text.
Responsive layout that adjusts for mobile, tablet, and desktop screens.
Error messages (if any) appear in red below the input fields.



Usage Flow

User enters a monetary amount (e.g., 100) and a GST percentage (e.g., 18).
The website instantly calculates and displays:
Add GST:
Value Before GST: $100.00
Calculated GST: $18.00
GST Inclusive Value: $118.00


Subtract GST:
Value Including GST: $100.00
Subtracted GST: $15.25 (calculated as 100 × 18 / (100 + 18))
GST Exclusive Value: $84.75


If the user changes the inputs, the outputs update in real-time.
Invalid inputs (e.g., negative numbers or non-numeric values) trigger an error message.

Accessibility

Input fields include ARIA labels for screen reader compatibility.
High-contrast text and sufficient spacing ensure readability.
Keyboard navigation is supported for all interactive elements.

Deployment

The website is a single HTML file with embedded JavaScript and CSS.
It can be hosted on any static web server or viewed directly in a browser.


