### Disclaimer
This software is still under development and not anywhere near the desired functionality.  
Therefore most of the advertised features are not yet implemented.

### Features

- Supports all major browsers (Chrome, Firefox, Safari)
- Support Homeassistant (custom card) > not yet implemented
- Full-featured: Near-Real-time camera feed


# PiBell UI
  
<img src="https://raw.githubusercontent.com/faupau03/PiBell-UI/master/Logo.webp" alt="drawing" width="200"/>
  
![](https://img.shields.io/github/stars/faupau03/pibell-ui.svg) ![](https://img.shields.io/github/forks/faupau03/pibell-ui.svg) ![](https://img.shields.io/github/tag/faupau03/pibell-ui.svg) ![](https://img.shields.io/github/release/faupau03/pibell-ui.svg) ![](https://img.shields.io/github/issues/faupau03/pibell-ui.svg)

**Table of contents**

## Installation
### Docker
#### Clone this repository
`$ git clone https://github.com/faupau03/pibell-ui`
#### Install docker and docker-compose
[Installation of Docker](https://docs.docker.com/engine/install/ "Installation of Docker")  
[Installation of docker-compose](https://docs.docker.com/compose/install/ "Installation of docker-compose")
#### Edit configuration
`$ nano docker-compose.yml`  

Change the following lines according to your needs  
`WEBRTC_IP = <IP from pi>`  
`WEBRTC_PORT = <port from pi>`  
`VIDEO_IP = <IP from video feed>`  
`VIDEO_PORT = <port from video feed>`
#### Launch Application
`$ docker-compose up -d`
### Native
To be done


## Screenshots

![](https://raw.githubusercontent.com/faupau03/PiBell/master/Screenshot%202022-01-02%20234438.png)

> Call incoming.
