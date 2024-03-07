# J.O-Team-Profile-Generator

This project is a Node.js command-line application designed to generate an HTML webpage displaying summaries of software engineering team members. It utilizes object-oriented programming principles to create a structured and scalable solution.

## Project Overview

The application allows a manager to input information about team members, which includes their name, employee ID, email, and specific details relevant to their role (e.g., office number for managers, GitHub username for engineers, and school for interns). This information is then used to generate a dynamic HTML page that showcases each team member's profile. The generated HTML is saved to a file named team.html in an output folder.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Technical Requirements](#technical-requirements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

* Object-Oriented Design: The application is structured using classes to represent different roles within a software engineering team, including Employee, Manager, Engineer, and Intern. Each class inherits from the Employee parent class and adds its unique properties and methods.

* Command-Line Interface: Utilizes the Inquirer package to create an interactive command-line interface that prompts the user to input team member information.

* HTML Generation: Leverages a provided render function to generate an HTML template that displays each team member's information in a structured and visually appealing format.

* Validation: Optionally, the application can include validation to ensure that user input is in the correct format before creating team member objects.

## Screenshots

I have attached screenshots of the outcome running it in node mode and how it looks on the live browser below:

![Screenshot1](/assets/Screenshot%202024-03-07%20at%2003.28.45.png)
![Screenshot2](/assets/Screenshot%202024-03-07%20at%2003.28.06.png)

## Usage

To get started with the project, follow these steps:

* Clone the Repository: Clone this repository to your local machine.

* Install Dependencies: Navigate to the project directory in your terminal and run npm install to install the necessary dependencies, including Inquirer for the command-line interface and Jest for testing.

* Run the Application: Execute node index.js in your terminal to start the application. Follow the prompts to input information about your team members.

* Review the Output: After completing the prompts, the application will generate an team.html file in the output folder. Open this file in a web browser to view the team profile page.

## Technical Requirements

* Node.js environment with npm (Node Package Manager) installed.

* Knowledge of JavaScript and Node.js.

* Familiarity with object-oriented programming concepts.

## Contributing

Contributions to this project are welcome. Please ensure that any pull requests adhere to the project's coding standards and include unit tests to cover new functionality.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, please open an issue on this repository.