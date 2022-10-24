import {styled} from "@mui/material/styles";
import { lazy } from "react";

const Parte1 = lazy(() => import('./Parte-1'))
const Parte2 = lazy(() => import('./Parte-2'))
const Parte3 = lazy(() => import('./Parte-3'))

const IllustrationJogosDoSeuCurso = () => {
  const StyledIllustrationJogosDoSeuCurso = styled("div")`
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
        fill: #b55b52;
      }
      .cls-3,
      .cls-7 {
        fill: #fff;
      }
      .cls-3 {
        opacity: 0.5;
      }
      .cls-3,
      .cls-5 {
        isolation: isolate;
      }
      .cls-4 {
        fill: #263238;
      }
      .cls-5 {
        opacity: 0.2;
      }
      .cls-6 {
        opacity: 0.7;
      }
      .cls-8 {
        fill: #b65b52;
      }
    }
  `;
  return (
    <StyledIllustrationJogosDoSeuCurso>
      <div className="svg">
        <svg viewBox="0 0 117.55 279.17">
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <g id="freepik--Character--inject-91">
                <Parte1/>
                <Parte2/>
                <Parte3/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationJogosDoSeuCurso>
  );
};

export default IllustrationJogosDoSeuCurso;
