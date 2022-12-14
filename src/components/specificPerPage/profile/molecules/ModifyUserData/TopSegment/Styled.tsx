import { styled } from "@mui/material/styles";

export const StyledTopSegment = styled("div")`
  position: relative;
  width: 100%;
  background-color: #f90000;

  .svg-vector {
    position: absolute;
    width: 100%;
  }

  .expand-area-click {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 3%;
    @media (max-width: 1000px) {
      & {
        margin-top: 2%;
      }
    }
    ${(props) => props.theme.breakpoints.down("md")} {
      margin-top: 6%;
    }
    @media (max-width: 800px) {
      & {
        margin-top: 4.2%;
      }
    }
    ${(props) => props.theme.breakpoints.down("sm")} {
      margin-top: 3%;
    }
    ${(props) => props.theme.breakpoints.down("xs")} {
      margin-top: 1.5%;
    }

    .complement-icon {
      position: absolute;
      z-index: 1;
      border: 1px solid ${(props) => props.theme.palette.primary.dark};
      border-radius: 100px;
      padding: 4px;
      transition: 0.3s;
      cursor: pointer;
      &.is-open-component-true {
        transform: rotate(180deg);
      }

      .svg-angle-botton {
        display: flex;
        justify-content: center;
        height: 18px;
        width: 18px;
      }
    }
  }
`;
