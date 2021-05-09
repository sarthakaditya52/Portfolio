import { TimelineMax as Timeline, Power1 } from 'gsap';

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const about = node.querySelectorAll('.about');
  const links = node.querySelectorAll('.nav-link');
  const ul = node.querySelectorAll('ul');

  const experience = node.querySelectorAll('.experience');

  const projects = node.querySelectorAll('.projects');
  const project = node.querySelectorAll('.project');

  const cHead = node.querySelectorAll('.contact-head');
  const cDesc = node.querySelectorAll('.contact-desc');
  const eBtn = node.querySelectorAll('.email-btn');

  timeline
    .staggerFrom(links, 0.245, { autoAlpha: 0, x: -25, y: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(about, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(ul, 0.15, { autoAlpha: 0, ease: Power1.easeIn }, 0.13)
    .staggerFrom(experience, 0.15, { autoAlpha: 0, y: -25, ease: Power1.easeOut })
    .staggerFrom(projects, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(project, 0.315, { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0 }, 0.13)
    .staggerFrom(cHead, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(cDesc, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(eBtn, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })

  return timeline;
}

const getExpTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const experience = node.querySelectorAll('.experience');
  const links = node.querySelectorAll('.nav-link');
  const ul = node.querySelectorAll('ul');

  const projects = node.querySelectorAll('.projects');
  const project = node.querySelectorAll('.project');

  const cHead = node.querySelectorAll('.contact-head');
  const cDesc = node.querySelectorAll('.contact-desc');
  const eBtn = node.querySelectorAll('.email-btn');

  timeline
    .staggerFrom(links, 0.245, { autoAlpha: 0, x: -25, y: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(experience, 0.15, { autoAlpha: 0, y: -25, ease: Power1.easeOut })
    .staggerFrom(ul, 0.15, { autoAlpha: 0, ease: Power1.easeIn }, 0.13)
    .staggerFrom(projects, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(project, 0.315, { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0 }, 0.13)
    .staggerFrom(cHead, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(cDesc, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(eBtn, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })

  return timeline;
}

const getProjectTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const links = node.querySelectorAll('.nav-link');
  const ul = node.querySelectorAll('ul');

  const projects = node.querySelectorAll('.projects');
  const project = node.querySelectorAll('.project');

  const cHead = node.querySelectorAll('.contact-head');
  const cDesc = node.querySelectorAll('.contact-desc');
  const eBtn = node.querySelectorAll('.email-btn');

  timeline
    .staggerFrom(links, 0.245, { autoAlpha: 0, x: -25, y: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(projects, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(project, 0.315, { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0 }, 0.13)
    .staggerFrom(ul, 0.15, { autoAlpha: 0, ease: Power1.easeIn }, 0.13)
    .staggerFrom(cHead, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(cDesc, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(eBtn, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })

  return timeline;
}

const getContactTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const links = node.querySelectorAll('.nav-link');
  const ul = node.querySelectorAll('ul');

  const cHead = node.querySelectorAll('.contact-head');
  const cDesc = node.querySelectorAll('.contact-desc');
  const eBtn = node.querySelectorAll('.email-btn');

  timeline
    .staggerFrom(links, 0.245, { autoAlpha: 0, x: -25, y: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(cHead, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(cDesc, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(eBtn, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(ul, 0.15, { autoAlpha: 0, ease: Power1.easeIn }, 0.13)

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const links = node.querySelectorAll('.nav-link');
  const ul = node.querySelectorAll('ul');

  const home = node.querySelectorAll('.home-container');

  const about = node.querySelectorAll('.about');

  const experience = node.querySelectorAll('.experience');

  const projects = node.querySelectorAll('.projects');
  const project = node.querySelectorAll('.project');

  const cHead = node.querySelectorAll('.contact-head');
  const cDesc = node.querySelectorAll('.contact-desc');
  const eBtn = node.querySelectorAll('.email-btn');


  timeline
    .staggerFrom(links, 0.245, { autoAlpha: 0, x: -25, y: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(home, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(ul, 0.15, { autoAlpha: 0, ease: Power1.easeIn }, 0.13)
    .staggerFrom(about, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(experience, 0.15, { autoAlpha: 0, y: -25, ease: Power1.easeOut })
    .staggerFrom(projects, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(project, 0.315, { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0 }, 0.13)
    .staggerFrom(cHead, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(cDesc, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })
    .staggerFrom(eBtn, 0.15, { autoAlpha: 0, x: -25, ease: Power1.easeOut })

  return timeline;
}

export const play = (hash, node, appears) => {
  const delay = appears ? 0 : 0.5;

  let timeline

  switch (hash) {
        case "#about":
            timeline = getAboutTimeline(node, delay);
            break
        case "#experiences":
            timeline = getExpTimeline(node, delay);
            break
        case "#work":
          timeline = getProjectTimeline(node, delay);
          break
        case "#contact":
            timeline = getContactTimeline(node, delay);
            break
        default:
            timeline = getHomeTimeline(node, delay);
            break
    }

    requestAnimationFrame(() => timeline.play())
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}