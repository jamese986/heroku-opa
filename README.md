# ReactJS Example App

## Getting Started

These instructions will get you a up and  of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to run this project you will need the following software:

-   Docker
-   ReactJS
-   Node

### Installing With Docker

Please follow the following steps if you wish to run this project using Docker.

Enter the main app directory

    cd ~/Example/path/to/[heroku-opa]

Run Docker Compose this will build from the DockerFile provided.

    docker-compose build web

Once finished start the container:

    docker-compose up web

This will trigger `npm start` and our React server. Will be up accessible from  

## Testing

Testing will be handled by [JestJS](https://github.com/facebook/jest) a JavaScript Testing Framework.

## Heroku Deployment

To deploy this application on Heroku run the following commands:

Only run the following 2 commands on initial setup

    $ heroku create REPLACE_APP_NAME_HERE — buildpack

Authenticate your credentials 

    $ heroku open

To deploy via the Heroku CLI run the following command:

    $ git push heroku master

## Built With

-   [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [Docker](https://www.docker.com/) - Application Container Platform

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

-   **James English** 

## Acknowledgments

-   [ReactJS](https://reactjs.org/)
-   [Freedcodecamp](https://medium.freecodecamp.org/rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923)
-   [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
