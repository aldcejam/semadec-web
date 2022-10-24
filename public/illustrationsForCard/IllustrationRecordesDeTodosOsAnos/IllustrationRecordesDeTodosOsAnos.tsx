import {styled} from "@mui/material/styles";
import Parte1 from "./Parte-1";
import Parte2 from "./Parte-2";
import Parte3 from "./Parte-3";
import Parte4 from "./Parte-4";
import Parte5 from "./Parte-5";
import Parte6 from "./Parte-6";

const IllustrationRecordesDestaEdicao = () => {

  const StyledIllustrationRecordesDestaEdicao = styled("div")`
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
      .cls-15,
      .cls-18,
      .cls-2,
      .cls-22,
      .cls-23,
      .cls-5 {
        fill: #fff;
      }
      .cls-11,
      .cls-2,
      .cls-4 {
        opacity: 0.2;
      }
      .cls-6 {
        fill: #dd8c6a;
      }
      .cls-7 {
        fill: #df5753;
      }
      .cls-8 {
        fill: #e58a7b;
      }
      .cls-23,
      .cls-9 {
        opacity: 0.6;
      }
      .cls-10,
      .cls-15,
      .cls-17,
      .cls-20 assign-color {
        opacity: 0.1;
      }
      .cls-12 {
        opacity: 0.4;
      }
      .cls-13 {
        fill: #2e353a;
      }
      .cls-14 {
        fill: #ffc3bd;
      }
      .cls-16 {
        fill: #ed893e;
      }
      .cls-18,
      .cls-19 {
        opacity: 0.3;
      }
      .cls-21 {
        fill: #ffb573;
      }
      .cls-22 {
        opacity: 0.5;
      }
      .cls-24 {
        fill: #ff5652;
      }
    }
  `;
  return (
    <StyledIllustrationRecordesDestaEdicao>
      <div className="svg">
        <svg viewBox="0 0 287.23 354.52">
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <Parte1/>
              <Parte2/>
              <Parte3/>
              <g id="freepik--character-2--inject-5">
                <Parte4/>
                <Parte5/>
              </g>
              <g id="freepik--character-1--inject-5">
                <Parte6/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationRecordesDestaEdicao>
  );
};

export default IllustrationRecordesDestaEdicao;
