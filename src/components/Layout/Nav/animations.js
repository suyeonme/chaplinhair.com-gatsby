import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 0.7, ease: 'power2.inOut', stagger: 0.2 },
});

export const showNav = (el1, el2, el3, el4, el5) => {
  tl.to(el1, { duration: 0, css: { visibility: 'visible' } })
    .from([el1, el2], {
      height: 0,
      skewY: 2,
      transformOrigin: 'right top',
    })
    .to(el3, {
      y: 0,
      opacity: 1,
    })
    .from([el4, el5], { duration: 0.3, y: 10, opacity: 0 }, '-=0.2');
};

export const hideNav = (el1, el2, el3, el4, el5) => {
  tl.to([el1, el2, el3], {
    duration: 0.3,
    opacity: 0,
    stagger: 0,
  })
    .to([el4, el5], {
      height: 0,
      skewY: 2,
      transformOrigin: 'right top',
    })
    .to(el5, { duration: 0, css: { visibility: 'hidden' } });
};
