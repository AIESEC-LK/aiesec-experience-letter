
# Experience Letter Generator

This Angular project is designed to streamline the process of generating experience letters. Upon form submission, the application automatically creates a Google Document and generates an experience letter efficiently.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Experience Letter Generator is a web application built using Angular that simplifies the process of creating experience letters. The application collects user input through a form and, upon submission, generates a Google Document with the necessary information formatted into a professional experience letter.

## Features
- User-friendly form for inputting employee details.
- Automated generation of Google Documents.
- Efficient and streamlined process for creating experience letters.
- Customizable templates for experience letters.

## Technologies Used
- **Angular**: Front-end framework for building the web application.
- **Google Docs API**: For creating and managing Google Documents.
- **HTML/CSS**: For structuring and styling the application.
- **TypeScript**: For application logic and functionality.

## Setup and Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/experience-letter-generator.git
    cd experience-letter-generator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Google Docs API**:
    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project.
    - Enable the Google Docs API.
    - Set up OAuth 2.0 credentials and download the credentials file.
    - Place the credentials file in the `src/assets` directory of your project.

4. **Run the application**:
    ```bash
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`.

## Usage
1. **Open the application**:
   Navigate to `http://localhost:4200/`.

2. **Fill out the form**:
   Enter the necessary details for the experience letter, such as employee name, position, dates of employment, etc.

3. **Submit the form**:
   Click on the "Generate Letter" button to submit the form.

4. **View the generated document**:
   The application will automatically create a Google Document with the entered details formatted into an experience letter.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README.md file as per your project's specific requirements.

# EndorsementLetters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
