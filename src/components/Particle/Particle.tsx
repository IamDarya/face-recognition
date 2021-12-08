import React from 'react';
// import Particles from 'react-particles-js';
// import styled from 'styled-components';
import BeeImg from '../../assets/bee.png';

// const ParticleBackground = styled(Particles)`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   filter: opacity(0.8);
// `;

// export const Particle = (): JSX.Element => {
//   return (
//     <ParticleBackground
//       params={{
//         autoPlay: true,
//         particles: {
//           number: {
//             value: 159,
//             density: {
//               enable: true,
//               value_area: 3447.335930860874,
//             },
//           },
//           color: {
//             value: '#ffffff',
//           },
//           shape: {
//             type: 'image',
//             stroke: {
//               width: 0,
//               color: '#000000',
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//             image: {
//               src: `${BeeImg}`,
//               width: 100,
//               height: 100,
//             },
//           },
//           opacity: {
//             value: 1,
//             random: false,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 24.05118091298284,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 10,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: false,
//             distance: 150,
//             color: '#ffffff',
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1.5,
//             direction: 'none',
//             random: false,
//             straight: false,
//             out_mode: 'out',
//             bounce: false,
//             attract: {
//               enable: true,
//               rotateX: 2886.1417095579413,
//               rotateY: 4489.553770423464,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: 'canvas',
//           events: {
//             onhover: {
//               enable: true,
//               mode: 'repulse',
//             },
//             onclick: {
//               enable: true,
//               mode: 'push',
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 400,
//               line_linked: {
//                 opacity: 1,
//               },
//             },
//             bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

import Particles from 'react-tsparticles';

export const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      loaded={Particle}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 500,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#FF7F50',
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: 'image',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: `${BeeImg}`,
              width: 200,
              height: 200,
            },
          },
          size: {
            random: true,
            value: 12,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
