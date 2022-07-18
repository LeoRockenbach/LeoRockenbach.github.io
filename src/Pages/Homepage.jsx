import Particle from "../Components/Particle";
import { Background } from "../Style/Background";
import Header from "../Layout/Header";
import MainHome from "../Layout/MainHome";

export default function Homepage() {
  return (
    <>
    <Background>
      <Particle />
      <Header />
      <MainHome/>
    </Background>
    </>
  )
}

