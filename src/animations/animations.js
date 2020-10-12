import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { ease: 'power2.out', stagger: 0.3 } });

export const fadeIn = (delayTime, ...arr) => {
  tl.to([...arr], { opacity: 1, y: 0, duration: 1, delay: delayTime });
};

export const showModal = (modal, content) => {
  tl.from(modal, 0.5, {
    height: '0%',
    ease: 'power2.easeInOut',
  }).to(
    content,
    0.5,
    {
      opacity: 1,
      y: 0,
      ease: 'power2.easeInOut',
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
