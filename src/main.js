import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"
animate(
    ".loading", {
        translateX:  [-183.5, -183.5],
        translateY: [-183.5, -183.5],
        scale: [1, 0]
       
    }, {
        duration: 1
    }
    
)
animate(
    ".slide_left", {
        translate: [1, -1000 ]

    }, {
        duration: 1,
        delay: 1
    }
)
animate(
    ".slide_right", {
        translate: [1, 1000 ]

    }, {
        duration: 1,
        delay: 1
    }
)
animate(
    ".fade_out", {
        opacity: [1,0]
    }, 
    {
        duration: 0.5,
        delay: 1

    }
)
animate (
    ".hearts", {
        scale: [0.8, 1, 0.8]
    },
    {
        repeat: Infinity,
        duration: 5
    }
)
animate (
    ".hearts_delay", {
        scale: [1, 0.8, 1]
    },
    {
        repeat: Infinity,
        duration: 5
        
    
    }
)