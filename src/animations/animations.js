import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const tl = gsap.timeline({ defaults: { ease: 'power2.out', stagger: 0.3 } });

export const fadeIn = (delayTime, trigger, ...el) => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      start: 'top center',
    },
  });

  tl.to([...el], { opacity: 1, y: 0, duration: 1, delay: delayTime });
};

export const fadeInWithImg = (trigger, overlay, title, ...texts) => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      start: 'top center',
    },
  });

  tl.to(title, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.inOut',
  })
    .to(overlay, {
      width: '0%',
      duration: 0.8,
      ease: 'power2.inOut',
    })
    .to(
      texts,
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power2.inOut',
      },
      '-=0.5',
    );
};

export const revealImg = (trigger, overlay) => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      start: 'top center',
    },
  });

  tl.to(overlay, { duration: 1.2, width: '0%', ease: 'power2.inOut' });
};

export const showModal = (modal, content) => {
  tl.from(modal, {
    height: '0%',
    ease: 'power2.easeInOut',
    duration: 0.5,
  }).to(
    content,
    {
      opacity: 1,
      y: 0,
      ease: 'power2.easeInOut',
      duration: 0.5,
    },
    '-=0.3',
  );
};

export const hideModal = (content, modal) => {
  tl.to(content, {
    opacity: 0,
    y: 60,
    duration: 0.5,
    ease: 'power4.easeInOut',
  }).to(
    modal,
    { height: '0%', ease: 'power4.easeInOut', duration: 0.5 },
    '-=0.3',
  );
};
