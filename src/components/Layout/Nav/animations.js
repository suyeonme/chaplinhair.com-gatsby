import gsap from 'gsap';

const tl = gsap.timeline();

export const showNav = (el1, el2, el3, el4, el5) => {
  tl.to(el1, { duration: 0, css: { visibility: 'visible' } })
    .from([el1, el2], {
      duration: 0.7,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
    })
    .to(el3, 0.6, {
      y: 0,
      opacity: 1,
      ease: 'Power2.easeOut',
      stagger: 0.2,
    })
    .from([el4, el5], 0.2, { y: 10, opacity: 0, stagger: 0.2 }, '-=0.2');
};

export const hideNav = (el1, el2, el3, el4, el5) => {
  tl.to([el1, el2, el3], 0.3, {
    opacity: 0,
    ease: 'Power2.easeOut',
  })
    .to([el4, el5], {
      duration: 0.7,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
    })
    .to(el5, 0, { css: { visibility: 'hidden' } });
};
