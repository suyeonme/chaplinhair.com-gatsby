import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  @supports (backdrop-filter: blur(3px)) {
    backdrop-filter: blur(3px);
  }
`;

export const Container = styled.div`
  width: 75%;
  height: auto;
  background-color: white;
  border-radius: 0.3rem;
  overflow-y: auto;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    max-height: 80%;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 75%;
    max-height: 75%;
  }
`;

export const Content = styled.div`
  display: flex;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ContentImg = styled.div`
  width: 40%;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: inline-block;
  position: relative;
  margin: 0 auto;

  &:after {
    padding-top: 118.84%;
    display: block;
    content: '';
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 5rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 60%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.5rem;

    &:not(:first-child) {
      margin-top: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2;
    white-space: pre-line;
  }
`;

// import styled from 'styled-components';

// export const Overlay = styled.div`
//   position: fixed;
//   z-index: 50;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.6);
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @supports (backdrop-filter: blur(3px)) {
//     backdrop-filter: blur(3px);
//   }
// `;

// export const Container = styled.div`
//   width: 75%;
//   height: auto;
//   ${'' /* height: 75%; */}
//   background-color: white;
//   border-radius: 3px;

//   @media screen and (max-width: 1200px) {
//     width: 85%;
//     height: 40%;
//   }

//   @media screen and (orientation: landscape) and (max-width: 1024px) {
//     height: 75%;
//   }

//   @media screen and (max-width: 576px) {
//     width: 100%;
//     height: 85%;
//   }
// `;

// export const Content = styled.div`
//   display: flex;
//   height: 100%;

//   @media screen and (max-width: 576px) {
//     flex-direction: column;
//     ${'' /* justify-content: flex-start; */}
//     overflow-y: auto;
//   }

//   @media screen and (orientation: landscape) and (max-width: 576px) {
//     justify-content: center;
//   }

//   @media screen and (max-width: 320px) {
//     justify-content: center;
//   }
// `;

// export const ContentImg = styled.div`
//   width: 40%;
//   height: 100%;
//   background: ${(props) => `url(${props.img})`};
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;

//   @media screen and (max-width: 576px) {
//     width: 100%;
//     height: 40%;
//   }
// `;

// export const ContentText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 60%;
//   padding: 5rem;
//   opacity: 0;
//   transform: translateY(60px);

//   @media screen and (max-width: 576px) {
//     width: 100%;
//     height: 60%;
//   }

//   h2 {
//     font-size: 1.8rem;
//     font-weight: 400;
//     line-height: 1.3;
//     text-align: center;
//     margin-bottom: 2rem;
//     ${'' /*

//     @media screen and (max-width: 576px) {
//       margin-bottom: 0.5rem;
//     }

//     @media screen and (orientation: landscape) and (max-width: 1024px) {
//       font-size: 1rem;
//     } */}

//     ${'' /* @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//       margin-bottom: 0.5rem;
//       font-size: 0.7rem;
//     } */}
//   }

//   h3 {
//     font-size: 1.6rem;
//     font-weight: 400;
//     margin-bottom: 0.5rem;

//     &:not(:first-child) {
//       margin-top: 3rem;
//       ${'' /*
//       @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//         margin-top: 0.5rem;
//       }

//       @media screen and (orientation: landscape) and (max-width: 48rem) {
//         margin-top: 0.5rem;
//       }

//       @media screen and (max-width: 36rem) {
//         margin-top: 1rem;
//       } */}
//     }
//   }

//   p {
//     font-size: 1.4rem;
//     line-height: 2;
//     white-space: pre-line;

//     ${'' /* @media screen and (orientation: landscape) and (max-width: 64rem) {
//       font-size: 0.8rem;
//     }

//     @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//       font-size: 0.6rem;
//       margin-bottom: 0.5rem;
//     }

//     @media screen and (max-width: 48rem) {
//       font-size: 0.8rem;
//     }

//     @media screen and (orientation: landscape) and (max-width: 48rem) {
//       font-size: 0.6rem;
//       line-height: 1.7;
//       margin-bottom: 0.5rem;
//     } */}
//   }
// `;
