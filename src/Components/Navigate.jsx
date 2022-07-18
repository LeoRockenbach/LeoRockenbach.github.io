import { StyleNavigate } from "../Style/StyledNavigate";
import IconHome from '../Assets/Icon/Black/casa.png';
import IconI from '../Assets/Icon/Black/do-utilizador.png';
import IconProjects from '../Assets/Icon/Black/programas.png';
import IconCertificate from '../Assets/Icon/Black/certificado.png';
import IconSnow from '../Assets/Icon/Black/icons8-snow-64.png';

export default function Navigate() {

  return (
  <>
    <StyleNavigate>
      <ul>
          <li>
            <img src= {IconHome} alt="Home" />
          </li>            <li>
            <img src={IconI} alt="Quem sou eu?" />
          </li>
          <li>
            <img src= {IconProjects} alt="Projects" />
          </li>
          <li>
            <img src= {IconCertificate} alt="Certificados" />
          </li>
          <img src={IconSnow} alt='Button Mode' />
        </ul>
    </StyleNavigate>
  </>
  )
}
