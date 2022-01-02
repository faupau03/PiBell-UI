### Disclaimer
This software is still under development and not anywhere near the desired functionality.  
Therefore most of the advertised features are not yet implemented.

### Features

- Supports all major browsers (Chrome, Firefox, Safari)
- Support MQTT > not yet implemented
- Support Homeassistant (custom card) > not yet implemented
- Full-featured: Near-Real-time camera feed


# PiBell
<img src="https://raw.githubusercontent.com/faupau03/PiBell/master/Logo.webp alt="drawing" width="200"/>

![](https://img.shields.io/github/stars/faupau03/pibell.svg) ![](https://img.shields.io/github/forks/faupau03/pibell.svg) ![](https://img.shields.io/github/tag/faupau03/pibell.svg) ![](https://img.shields.io/github/release/faupau03/pibell.svg) ![](https://img.shields.io/github/issues/faupau03/pibell.svg)

**Table of contents**

## Installation
### Docker
#### Clone this repository
`$ git clone https://github.com/faupau03/pibell`
#### Install docker and docker-compose
[Installation of Docker](https://docs.docker.com/engine/install/ "Installation of Docker")  
[Installation of docker-compose](https://docs.docker.com/compose/install/ "Installation of docker-compose")
#### Edit configuration
`$ nano docker-compose.yml`  

Change the following lines according to your needs  
`DOORBELL_IP= <IP from pi>`  
`DOORBELL PORT = <port from pi>`  
#### Launch Application
`$ docker-compose up -d`
### Native
To be done


## Screenshots

![](https://raw.githubusercontent.com/faupau03/PiBell/master/Screenshot%202022-01-02%20234438.png)

> Call incoming.
