import { styled } from "@mui/material/styles";

export const StyledIconVersus = styled("div")`
    position: relative;
    padding-top: 2px;

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      right: 0;
      left: 0;
      margin: auto;
      background: ${(props) => props.theme.palette.text.primary};
      border-radius: 100px;
    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
`