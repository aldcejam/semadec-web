import { styled } from "@mui/material/styles";

export const StyledButtonSelectGenre = styled("article")`
  text-align: center;
  padding: 10px;
  border-top: 2px solid ${(props) => props.theme.palette.primary.main};
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  box-shadow: inset -5px -5px 10px
    ${(props) => props.theme.palette.secondary.main}3f;
  cursor: pointer;
  .illustration {
    position: relative;
    width: 90px;
    height: 90px;
    ${(props) => props.theme.breakpoints.down("xs")} {
      width: 100px;
      height: 100px;
    }
  }
  p {
    position: relative;
    margin: 15px 0 0 0;
    bottom: 0px;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`;
