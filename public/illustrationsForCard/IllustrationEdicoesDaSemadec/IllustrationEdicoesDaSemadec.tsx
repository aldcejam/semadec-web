import {styled} from "@mui/material/styles";
import { lazy } from "react";

const Parte1 = lazy(() => import('./Parte-1'))
const Parte2 = lazy(() => import('./Parte-2'))
const Parte3 = lazy(() => import('./Parte-3'))
const Parte4 = lazy(() => import('./Parte-4'))

const IllustrationEdicoesDaSemadec = () => {

  const StyledIllustrationEdicoesDaSemadec = styled("div")`
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
        fill: #c7c7c7;
      }
      .cls-3 {
        fill: #dbdbdb;
      }
      .cls-4 {
        fill: #37474f;
      }
      .cls-6 {
        fill: #fff;
      }
      .cls-7 {
        fill: #455a64;
      }
      .cls-8 {
        fill: #ebebeb;
      }
      .cls-9 {
        fill: #a6a6a6;
      }
      .cls-10 {
        fill: #dd6a57;
      }
      .cls-11 {
        fill: #d3766a;
      }
      .cls-12 {
        opacity: 0.1;
        isolation: isolate;
      }
      .cls-13 {
        fill: #ff9cbd;
      }
    }
  `;
  return (
    <StyledIllustrationEdicoesDaSemadec>
      <div className="svg">
        <svg viewBox="0 0 648.56 344.75">
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <g id="freepik--Floor--inject-209">
                <polygon
                  className="cls-1"
                  points="0 344.25 81.07 344.01 162.14 343.92 324.28 343.75 486.42 343.92 567.49 344.01 648.56 344.25 567.49 344.5 486.42 344.59 324.28 344.75 162.14 344.58 81.07 344.5 0 344.25"
                />
              </g>
              <g id="freepik--Device--inject-209">
                <Parte1/>
                <Parte2/>
              </g>
              <g id="freepik--Character--inject-209">
                <Parte3/>
                <Parte4/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationEdicoesDaSemadec>
  );
};

export default IllustrationEdicoesDaSemadec;
