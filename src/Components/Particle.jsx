import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'


export default function Particle() {

const particlesInit = async (main) => {

    await loadFull (main);
  };

const particlesLoaded = (container) => {
}

  return (
    <Particles
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 200,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: {
              quantity: 1000,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
        },
        detectRetina: true,
      }}  />
  )
}
