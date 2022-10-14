import { styled } from "@mui/material";

export const StyledModifySocialMidias = styled("div")`
  grid-area: social-midias;
  display: grid;
  gap: 10px;
  &.input-error {
    color: ${(props) => props.theme.palette.error.main};
    .MuiOutlinedInput-root {
      & fieldset {
        border: 2px solid ${(props) => props.theme.palette.error.main} !important;
      }
      &.Mui-focused fieldset {
        border: 2px solid ${(props) => props.theme.palette.error.main} !important;
      }
    }
  }
`;
