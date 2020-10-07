import gsap from 'gsap';

// Navigation, page transition (the same)

export const showNav = (el1, el2, el3, el4) => {
  const tl = gsap.timeline();

  tl.to(el1, { duration: 0, css: { visibility: 'visible' } })
    .from(el1, 0.7, {
      opacity: 0,
      height: 0,
      ease: 'power4.inOut',
    })
    .to(el2, 0.6, {
      y: 0,
      opacity: 1,
      ease: 'Power2.easeOut',
      stagger: 0.2,
    })
    .from([el3, el4], 0.3, { opacity: 0, stagger: 0.1 });
};

export const hideNav = (el1, el2, el3, el4) => {
  const tl = gsap.timeline();

  tl.to(el1, 0.3, {
    opacity: 0,
    ease: 'Power2.easeOut',
  })
    .to([el2, el3], 0.3, { opacity: 0, stagger: 0.2 })
    .to(el4, 0.7, {
      height: 0,
      opacity: 0,
      ease: 'Power2.easeOut',
    })
    .to(el4, 0, { css: { visibility: 'hidden' } });
};
