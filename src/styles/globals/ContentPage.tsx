import { styled } from "@mui/material/styles";

const ContentPage = styled("div")`
  position: relative;
  width: 100%;
  height: calc(90.2vh - 70px);
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: calc(88vh);
    max-height: 88vh;
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.down("xs")} {
    height: calc(82.3vh - 20px);
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary.dark}b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.primary.dark};
  }
  
  .box-page {
    min-height: 100%;
    width: 100%;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    overflow: hidden;
    /* background-color: #ffffff16; */

    box-shadow: inset 20px 20px 81px
        ${(props) => props.theme.palette.primary.main}16,
      inset -20px -20px 81px ${(props) => props.theme.palette.secondary.main}16;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      backdrop-filter: blur(10px);
    }
    .decoration {
      position: absolute;
      z-index: 0;
    }
    .content {
      position: relative;
      z-index: 10;
    }
  }
`;

export default ContentPage