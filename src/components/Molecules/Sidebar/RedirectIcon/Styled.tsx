import { styled } from "@mui/material";

export const RedirecticonStyled = styled("li")`
  width: 200px;
  height: 25px;
  position: relative;
  display: flex;
  gap: 20px;
  list-style: none;
  cursor: pointer;

  .image {
    position: relative;
    width: 20px;
    height: 20px;
  }
  p {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 3px;
  }
`;
