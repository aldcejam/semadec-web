import {styled} from "@mui/material/styles";
import Parte1 from "./Parte-1";
import Parte2 from "./Parte-2";
import Parte3 from "./Parte-3";

const IllustrationJogosEsportivos = () => {

  const StyledIllustrationJogosEsportivos = styled("div")`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right ;

    
    .svg{
      .assign-color{

      }
      .cls-2 {
        opacity: 0.2;
      }
      .cls-2,
      .cls-4,
      .cls-8 {
        isolation: isolate;
      }
      .cls-3,
      .cls-4,
      .cls-8 {
        fill: #fff;
      }
      .cls-4 {
        opacity: 0.6;
      }
      .cls-5 {
        fill: #263238;
      }
      .cls-6 {
        fill: #a02724;
      }
      .cls-7 {
        fill: #b55b52;
      }
      .cls-8 {
        opacity: 0.7;
      }
      }
    
  `;
  return (
    <StyledIllustrationJogosEsportivos>
      <div className="svg">
        <svg viewBox="0 0 323.32 329.6">
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <Parte1/>
              
              <g id="freepik--Character--inject-3">
                <Parte2/>
                <Parte3/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationJogosEsportivos>
  );
};

export default IllustrationJogosEsportivos;
