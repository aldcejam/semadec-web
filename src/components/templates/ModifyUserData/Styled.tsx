import {styled} from "@mui/material/styles";

export const StyledModifyUserData = styled("section")`
  display: block;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 0 50px 0;
  border: ${(props) => props.theme.palette.primary.main} 1px solid;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  background-color: ${(props) => props.theme.palette.secondary.dark}1a;
  box-shadow: inset -40px -40px 81px ${(props) => props.theme.palette.primary.dark}12;
  backdrop-filter: blur(40px);
  transition: 0.3s;

  &.is-open-component-false {
    max-height: 80px;
    ${(props) => props.theme.breakpoints.down("md")} {
      max-height: 120px;
    }
    ${(props) => props.theme.breakpoints.down("sm")} {
      max-height: 80px;
    }
  }
  &.is-open-component-true {
    max-height: 100%;
  }

`;
