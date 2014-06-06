# Simple Swipes [![Build Status](https://travis-ci.org/ryanwalters/simple-swipes.svg?branch=master)](https://travis-ci.org/ryanwalters/simple-swipes)

Detect swipes in 171 bytes (gzipped).

###Usage:

- Include `swipes.js`
- Bind to the `swipe` event

        $element.on('swipe', function (event) {
            switch (event.detail.direction) {
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