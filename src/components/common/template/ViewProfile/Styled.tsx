import {styled} from "@mui/material/styles";

export const StyledViewProfile = styled("main")`
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  overflow-y: hidden;
  box-shadow: inset -40px -40px 81px ${(props) => props.theme.palette.primary.dark}12;
  /* Decoration */
  &::before {
    content: "";
    position: absolute;
    width: 101%;
    min-height: 100%;
    background-color: ${(props) => props.theme.palette.secondary.dark}1a;
    backdrop-filter: blur(40px);
    z-index: 10;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .svg-losango {
    position: absolute;
    width: 170%;
    max-height: 100%;
    top: 10%;
    left: -40px;
  }
  /* Decoration */

`;
