"use strict";

const slider = tns({
    container: '#press-slider',
    loop: true,
    items: 3,
    responsive: {
	    0: {
	        items: 1
	    },
	    576:{
            items:2
        },
        992:{
            items:3
        },
	},
    slideBy: 'page',
    nav: true,    
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 15,
    navPosition: 'bottom',
    controls: false,
    speed: 900,

});