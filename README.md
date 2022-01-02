### Features

- Supports all major browsers (Chrome, Firefox, Safari)
- Support MQTT
- Support Homeassistant (custom card)
- Full-featured: Near-Real-time camera feed


# PiBell

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/faupau03/pibell.svg) ![](https://img.shields.io/github/forks/faupau03/pibell.svg) ![](https://img.shields.io/github/tag/faupau03/pibell.svg) ![](https://img.shields.io/github/release/faupau03/pibell.svg) ![](https://img.shields.io/github/issues/faupau03/pibell.svg)


**Table of Contents**

[TOCM]

[TOC]

##Installation
###Docker
####Clone this repository
`$ git clone https://github.com/faupau03/pibell`
####Install docker and docker-compose
[Installation of Docker](https://docs.docker.com/engine/install/ "Installation of Docker")
[Installation of docker-compose](https://docs.docker.com/compose/install/ "Installation of docker-compose")
####Edit configuration
`$ nano docker-compose.yml`
Change the following lines according to your needs
`DOORBELL_IP= <IP from pi>`
`DOORBELL PORT = <port from pi>`
####Launch Application
`$ docker-compose up -d`
###Native
To be done



###Code Blocks (multi-language) & highlighting

####Inline code

`$ npm install marked`

####Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

####Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```


##Screenshots

![](https://raw.githubusercontent.com/faupau03/PiBell/master/Screenshot%202022-01-02%20234438.png)

> Call incoming.


###End
