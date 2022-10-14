import { styled } from "@mui/material/styles";

type TypesContainerContentPage = { 
  with_background_color: 'true' | 'false'
}

export const ContainerContentPage = styled("div")<TypesContainerContentPage>(({ with_background_color, ...props }) =>`
  position: relative;
  padding-right: 10px;
  width: calc(100% + 20px);
  height: 82.3vh;
  max-height: 82.3;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  padding-right: 10px;
  border-radius: ${props.theme.shape.borderRadius};
  
  ${props.theme.breakpoints.down("sm")} {
    width: calc(100% + 0px);
    
  }
  ${props.theme.breakpoints.down("xs")} {
    height: calc(82.3vh - 20px);
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props.theme.palette.primary.dark}b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props.theme.palette.primary.dark};
  }
    .box-page{
      position: absolute;
      min-height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 50px;
      border-radius: ${props.theme.shape.borderRadius};
      overflow: hidden;
      &::before{
          content: "";
          position: absolute;
          width: ${with_background_color == "true" ?  "100%":"" };
          min-height: 100%;
          background-color: ${props.theme.palette.secondary.dark}1a;
          backdrop-filter: blur(10px);
          border-radius: ${props.theme.shape.borderRadius};
          z-index: 10;
          
      }
    }
`);

export const ContainerPage = styled("div")`
  position: absolute;
  width: min(90vw, 1000px);
  left: 0;
  right: 0;
  top: 5vh;
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
