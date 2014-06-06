/*!
 * Simple Swipes - v0.1.2
 * http://ryanwalters.github.io/simple-swipes
 *
 * Copyright (c) 2014 Ryan Walters <shout@ryanwalters.co>
 * Licensed under the MIT License
 */
(function () {
    if (typeof window.CustomEvent !== 'undefined') {
        var absX,
            absY,
            startX,
            startY,
            deltaX,
            deltaY,
            timeStart,
            timeMax = 400,
            threshold = 50,
            swipeEvent = new CustomEvent('swipe', { // todo: implement CustomEvent polyfill
                detail: {},
                bubbles: true,
                cancelable: true
            }),
            direction,
            touchstart = function (event) {
                startX = event.touches[0].pageX;
                startY = event.touches[0].pageY;
                timeStart = +new Date();
            },
            touchend = function (event) {
                if (+new Date() - timeStart < timeMax) {
                    deltaX = startX - event.changedTouches[0].pageX;
                    deltaY = startY - event.changedTouches[0].pageY;
                    absX = Math.abs(deltaX);
                    absY = Math.abs(deltaY);
                    if (absX >= threshold && absX > absY) {         // moving horizontally
                        deltaX > 0 ?
                            direction = 'LEFT' :
                            direction = 'RIGHT';
                    } else if (absY >= threshold && absY > absX) {  // moving vertically
                        deltaY > 0 ?
                            direction = 'UP' :
                            direction = 'DOWN';
                    }
                }
                swipeEvent.detail.direction = direction;
                swipeEvent.detail.target = event.target;
                event.target.dispatchEvent(swipeEvent);
            };
        window.addEventListener('touchstart', touchstart, false);
        window.addEventListener('touchend', touchend, false);
    }
})();