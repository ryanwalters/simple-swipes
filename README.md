# Simple Swipes

Detect swipes in 182 bytes (gzipped).

###Usage:

- Include `swipes.js`
- Bind to the `swipe` event (e.g. `$el.on('swipe', function (event) { ... });`)
- Then:

        switch (event.direction) {
            case 'UP':
                ...
            case 'RIGHT':
                ...
            case 'DOWN':
                ...
            case 'LEFT':
                ...
        }

###Demo:

- http://ryanwalters.github.io/simple-swipes

###Author:

- Ryan Walters
- http://ryanwalters.co