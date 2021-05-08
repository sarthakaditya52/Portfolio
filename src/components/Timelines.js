import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('.home-container');
  const project = node.querySelectorAll('.project');
  const links = node.querySelectorAll('.nav-link');
  const headings = node.querySelectorAll('.section-heading-container');
  const ul = node.querySelectorAll('ul');

    timeline
        .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .staggerFrom(links, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125)
        .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125)
        .staggerFrom(ul, 0.15, { autoAlpha: 0, delay: 0.45, ease: Power1.easeIn }, 0.13)
        .staggerFrom(headings, 0.15, { autoAlpha: 0, delay: 0.45, ease: Power1.easeOut }, 0.13)
        .staggerFrom(project, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0 }, 0.13)


  return timeline;
}

export const play = (hash, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline = getDefaultTimeline(node, delay);
    requestAnimationFrame(() => timeline.play())
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
