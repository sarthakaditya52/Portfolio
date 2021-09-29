import React, { useEffect } from 'react'
import anime from "animejs"

function Logo({nav}) {
      
    useEffect(() => {
        const anim = anime.timeline()

        !nav && anim
        .add({
          targets: '#hexagon path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutQuart',
          duration: 2000,
          delay: function(el, i) { return i * 250 },
        })

    }, [nav])

    return (
        <div id="hex-container" className={`logo ${nav && "nav-logo-item"}`}>
            <svg id="hexagon" viewBox="0 0 100 100"  fill="none">
                <g>
                    <path stroke="#ebd50f" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" d=" M 65, 40
                        L 65, 33
                        L 50, 25
                        L 36, 33
                        L 36, 41
                        L 65, 54
                        L 65, 65
                        L 50, 74
                        L 36, 65
                        L 36, 58" />
                </g>
                <g>
                    <path stroke="#ebd50f" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" d="M 50, 5
                        L 11, 27
                        L 11, 72
                        L 50, 95
                        L 89, 73
                        L 89, 28 z" />
                </g>
            </svg>
        </div>
    )
}

export default Logo
