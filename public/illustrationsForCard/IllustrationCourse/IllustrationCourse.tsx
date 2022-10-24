import {styled} from "@mui/material/styles";
import { lazy } from 'react';

const Parte1 = lazy(() => import('./Parte-1'))
const Parte2 = lazy(() => import('./Parte-2'))
const Parte3 = lazy(() => import('./Parte-3'))

const IllustrationCourse = () => {

  const StyledIllustrationCourse = styled("div")`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      .assign-color{
      }
      .cls-1 {
        fill: #263238;
      }
      .cls-10,
      .cls-11,
      .cls-2,
      .cls-3,
      .cls-4,
      .cls-6,
      .cls-8,
      .cls-9 {
        stroke: #263238;
      }
      .cls-2 {
        stroke-width: 1.08px;
      }
      .cls-3,
      .cls-9 {
        fill: #fff;
      }
      .cls-3,
      .cls-4,
      .cls-5,
      .cls-6,
      .cls-7 {
        stroke-miterlimit: 10;
      }
      .cls-10,
      .cls-5,
      .cls-6,
      .cls-7,
      .cls-8 {
        fill: none;
      }
      .cls-5,
      .cls-7 {
        stroke: #fff;
      }
      .cls-5,
      .cls-7,
      .cls-8 {
        stroke-width: 0.5px;
      }
    }
  `;
  return (
    <StyledIllustrationCourse>
      <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345.55 282.35">
          <defs></defs>
          <g id="Camada_2" data-name="Camada 2">
            <g id="Camada_1-2" data-name="Camada 1">
              <Parte1/>
              <Parte2/>
              <Parte3/>
            </g>
          </g>
        </svg>
      </div>
    </StyledIllustrationCourse>
  );
};

export default IllustrationCourse;
