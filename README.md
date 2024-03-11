#  Gym 

Welcome to  Gym! This project is a fitness application built using React.js and RapidAPIs. With Golds Gym, you can browse through a vast collection of over 2000+ exercises, search for specific exercises, filter them by body parts, and get detailed information about each exercise. Additionally, you can watch instructional videos fetched from the YouTube Search and Download API and receive recommendations for similar exercises.

## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Configuration](#api-configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview <a name="project-overview"></a>

Golds Gym is a comprehensive fitness application that provides a user-friendly interface for exploring a wide range of exercises. Whether you're a fitness enthusiast, a beginner looking to get started, or someone who wants to target specific body parts, this app has you covered. It not only gives you access to a diverse exercise library but also provides instructional videos to guide you through proper form and technique.

## Demo <a name="demo"></a>

![golds-gym](https://github.com/TomarJatin/golds-gym/assets/91650461/2dcc979e-fa9f-4e5f-a4c6-626a57959a7f)



## Features <a name="features"></a>

- Browse and explore over 2000+ exercises.
- Search for specific exercises by name.
- Filter exercises by body parts.
- Get detailed information about each exercise, including descriptions, muscle groups targeted, and equipment required.
- Watch instructional videos from YouTube demonstrating how to perform exercises.
- Receive recommendations for similar exercises.

## Technologies Used <a name="technologies-used"></a>

- React.js: A JavaScript library for building user interfaces.
- RapidAPI: A platform for accessing various APIs, including ExerciseDB, YouTube Search, and YouTube Download.

## Getting Started <a name="getting-started"></a>

To set up the project locally, please follow the steps below:

1. Clone the repository:

`git clone https://github.com/your-username/golds-gym.git`


2. Install the dependencies:

`cd golds-gym`
`npm install`


## Running the Application <a name="running-the-application"></a>

To start the development server, run the following command:

`npm start`


The application will be accessible at `http://localhost:3000`.

## API Configuration <a name="api-configuration"></a>

This project utilizes the following RapidAPIs:

- ExerciseDB: A database of exercises and related information.
- YouTube Search: An API to search for YouTube videos related to specific exercises.
- YouTube Download: An API to fetch YouTube video URLs for embedding or downloading.

To configure the APIs, follow these steps:

1. Sign up for a RapidAPI account at [https://rapidapi.com/](https://rapidapi.com/).

2. Subscribe to the following APIs:
   - ExerciseDB
   - YouTube Search
   - YouTube Download

3. Obtain API keys for each subscribed API.

4. Create a `.env` file in the root directory of the project.

5. Add the following environment variables to the `.env` file:

REACT_APP_RAPID_API_KEY='Your API Key Here'

## Contributing <a name="license"></a>

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request to this repository.

Before contributing, please familiarize yourself with the [contribution guidelines](CONTRIBUTING.md).

## License <a name="project-overview"></a>

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of this license.
