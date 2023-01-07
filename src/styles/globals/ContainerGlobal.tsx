import { styled } from "@mui/material";

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

  .header-page{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* default styles */
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
  }

`;