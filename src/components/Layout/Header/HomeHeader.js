import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import headerImg from 'assets/img/header.jpg';
import headerTitle from 'assets/icons/header-title.svg';

const Container = styled.header`
  width: 100%;
  height: auto;
  background-color: black;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 64rem) {
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 815px;
  }

  @media screen and (max-width: 48rem) {
    min-height: 613px;
  }

  @media screen and (max-width: 36rem) {
    min-height: 300px;
  }
`;

const Image = styled.div`
  width: 90%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 64rem) {
    width: 100%;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 36rem) {
    top: 4rem;
  }
`;

const Title = styled.div`
  width: 10%;
  height: auto;
  margin-top: 1rem;
  padding: 0 1rem;

  @media screen and (max-width: 64rem) {
    width: 13%;
    position: absolute;
    top: 4rem;
    left: 50%;
    ${'' /* z-index: 15; */}
    transform: translate(-50%, -50%) rotate(90deg);
    padding: 0;
  }

  @media screen and (max-width: 36rem) {
    top: 2rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const HomeHeader = () => {
  // const imgRef = useRef(null);
  // const textRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     defaults: { duration: 1, ease: 'power4.inOut' },
  //   });

  //   tl.to(imgRef.current, {
  //     height: '100%',
  //     delay: 0.4,
  //   })
  //   .to(textRef.current, {
  //     opacity: 1,
  //     x: '0',
  //   });
  // }, []);

  return (
    <Container>
      <HeaderContainer>
        <Title>
          <img src={headerTitle} alt="채플린 헤어" />
        </Title>
        <Image>
          <img src={headerImg} alt="채플린 헤어" />
        </Image>
      </HeaderContainer>
    </Container>
  );
};

export default HomeHeader;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import gsap from 'gsap';

// import HeaderImg from 'assets/img/header.jpg';
// import HeaderTitle from 'assets/icons/header-title.svg';

// const Container = styled.header`
//   width: 100%;
//   ${'' /* min-height: 100vh; */}
//   background-color: black;
// `;

// const HeaderContainer = styled.div`
//   ${'' /* width: 100%; */}
//   ${'' /* height: 90vh;
//   display: flex;
//   justify-content: center;
//   align-items: center; */}

//   ${'' /* @media screen and (max-width: 64rem) {
//     flex-direction: column;
//     justify-content: flex-start;
//   } */}
// `;

// const Image = styled.div`
//   width: 100%;
//   height: 0;
//   background: url(${HeaderImg});
//   background-size: cover;
//   background-position: center;
// `;

// const Title = styled.img`
//   width: 7rem;
//   display: block;
//   margin: 0 1rem;

//   transform: translateX(30px);
//   opacity: 0;

//   @media screen and (max-width: 64rem) {
//     ${'' /* transform: translateX(0) rotate(90deg); */}
//   }
// `;

// const HomeHeader = () => {
//   const imgRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { duration: 1, ease: 'power4.inOut' },
//     });

//     tl.to(imgRef.current, {
//       height: '100%',
//       delay: 0.4,
//     }).to(textRef.current, {
//       opacity: 1,
//       x: '0',
//     });
//   }, []);

//   return (
//     <Container>
//       <HeaderContainer>
//         <Title src={HeaderTitle} alt="채플린 헤어" ref={textRef} />
//         <Image alt="채플린 헤어" ref={imgRef} />
//       </HeaderContainer>
//     </Container>
//   );
// };

// export default HomeHeader;
