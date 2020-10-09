import gsap from 'gsap';

const tl = gsap.timeline();

export const fadeIn = (duration, ...arr) => {
  gsap.to([...arr], 1, {
    opacity: 1,
    y: 0,
    ease: 'power4.out',
    stagger: {
      amount: 0.5,
    },
    delay: duration,
  });
};

export const showModal = (modal, content) => {
  tl.from(modal, 0.5, {
    height: '0%',
    ease: 'power4.easeInOut',
  }).to(
    content,
    0.5,
    {
      opacity: 1,
      y: 0,
      ease: 'power4.easeInOut',
    },
    '-=0.3',
  );
};

export const hideModal = (content, modal) => {
  tl.to(content, 0.5, {
    opacity: 0,
    y: 60,
    ease: 'power4.easeInOut',
  }).to(modal, 0.5, { height: '0%', ease: 'power4.easeInOut' }, '-=0.3');
};
