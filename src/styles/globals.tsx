import { styled } from "@mui/material/styles";



export const ContainerPage = styled("div")`
  position: absolute;
  width: min(90vw, 1000px);
  left: 0;
  right: 0;
  top: calc(5vh + 15px);
  margin: auto;
  padding-left: 70px;
  ${(props) => props.theme.breakpoints.down("sm")} {
    top: 30px;
    width: min(100vw, 1000px);
    padding-right: 20px;
  }
  ${(props) => props.theme.breakpoints.down("xs")} {
    padding-left: 0px;
    top: 70px;
    padding: 0 10px;
  }
`;

export const ContainerGlobal = styled("div")`
  position: absolute;
  width: min(90vw, 1000px);
  left: 0;
  right: 0;
  top: 5vh;
  margin: auto;
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: min(100vw, 1000px);
    top: 0vh;
  }
`;
