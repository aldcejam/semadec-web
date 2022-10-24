import {styled} from "@mui/material/styles";
import Parte1 from "./Parte-1";
import Parte2 from "./Parte-2";
import Parte3 from "./Parte-3";
import Parte4 from "./Parte-4";
import Parte5 from "./Parte-5";
import Parte6 from "./Parte-6";
import Parte7 from "./Parte-7";

const IllustrationPublicacoesSobreSemadec = () => {

  const StyledIllustrationPublicacoesSobreSemadec = styled("div")`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;

    .svg {

      .assign-color{
      }
      .cls-1 {
        fill: #263238;
      }
      .cls-2 {
        fill: #f7a9a0;
      }
      .cls-3 {
      }
      .cls-4 {
        fill: #37474f;
      }
      .cls-5 {
        opacity: 0.1;
      }
      .cls-5,
      .cls-6 {
        isolation: isolate;
      }
      .cls-6 {
        opacity: 0.2;
      }
      .cls-7 {
        fill: #455a64;
      }
      .cls-8 {
        fill: #ebebeb;
      }
      .cls-9 {
        fill: #ff9abb;
      }
      .cls-10,
      .cls-14 {
        fill: #fff;
      }
      .cls-11 {
        fill: #dbdbdb;
      }
      .cls-12 {
        fill: #c7c7c7;
      }
      .cls-13 {
        fill: #a6a6a6;
      }
      .cls-14 {
        fill-rule: evenodd;
      }
      .cls-15 {
        fill: #ad6359;
      }
    }
  `;
  return (
    <StyledIllustrationPublicacoesSobreSemadec>
      <div className="svg">
        <svg viewBox="0 0 428.5 387.11">
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <g id="freepik--Floor--inject-5">
                <polygon
                  className="cls-1"
                  points="23.98 380.1 74.54 379.86 125.11 379.77 226.24 379.6 327.37 379.77 377.94 379.85 428.5 380.1 377.94 380.34 327.37 380.43 226.24 380.6 125.11 380.43 74.54 380.34 23.98 380.1"
                />
              </g>
              <g id="freepik--character-1--inject-5">
                <Parte1/>
                <Parte2/>
              </g>
              <g id="freepik--Device--inject-5">
                <Parte3/>
                <Parte4/>
                <Parte5/>
              </g>
              <g id="freepik--character-2--inject-5">
                <Parte6/>
                <Parte7/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationPublicacoesSobreSemadec>
  );
};

export default IllustrationPublicacoesSobreSemadec;
