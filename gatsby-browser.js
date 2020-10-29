export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none';
  }, 1000);
};

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
