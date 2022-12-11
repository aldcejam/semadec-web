import { styled } from "@mui/material/styles";

export const ContainerContentPage = styled("div")`
  position: relative;
  width: calc(100% + 20px);
  height: 80vh;
  max-height: 82.3;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  
  ${props => props.theme.breakpoints.down("sm")} {
    width: calc(100% + 0px);
    
  }
  ${props => props.theme.breakpoints.down("xs")} {
    height: calc(82.3vh - 20px);
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.primary.dark}b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.primary.dark};
  }
  margin-top: 10px;
    .box-page{
      min-height: 100%;
      width: 100%;
      border-radius: ${props => props.theme.shape.borderRadius}px;
      overflow: hidden;
      /* background-color: #ffffff16; */
      
      box-shadow: inset 20px 20px 81px ${props => props.theme.palette.primary.main}16, inset -20px -20px 81px ${props => props.theme.palette.secondary.main}16;
      
      &::after{
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          width: 100%;
          min-height: 100%;
          backdrop-filter: blur(10px);
      }
      .decoration{
        position: absolute;
        z-index: 0;
        }
        .content{
          position: relative;
          z-index: 10;

        }
    }
`
  ;

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
