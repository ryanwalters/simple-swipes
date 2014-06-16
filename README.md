# Simple Swipes [![Build Status](https://travis-ci.org/ryanwalters/simple-swipes.svg?branch=master)](https://travis-ci.org/ryanwalters/simple-swipes)

Detect swipes in 164 bytes (gzipped).

###Usage:

- Include `swipes.js` (`bower install simple-swipes` or [download it](https://github.com/ryanwalters/simple-swipes/archive/0.1.2.zip))
- Bind to the `swipe` event

        $element.on('swipe', function (event) {
            switch (event.originalEvent.detail.direction) {
                case 'UP':
                    ...
                case 'RIGHT':
                    ...
                case 'DOWN':
                    ...
                case 'LEFT':
                    ...
            }
        });
        
- Note: jQuery isn't required, just used for demonstration purposes

###Demo:

- http://ryanwalters.github.io/simple-swipes

###Author:

- Ryan Walters
- http://ryanwalters.co