import {styled} from "@mui/material/styles";

export const StyedButtonSport = styled("button")`
  width: clamp(120px, 20vw, 250px);
  padding: 10px 0;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.palette.primary.light}1a;
  backdrop-filter: blur(10px);
  border: 1px solid ${(props) => props.theme.palette.primary.dark}b7;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.contrastText};

  &:hover {
    transition: 0.4s;
    border: 1px solid ${(props) => props.theme.palette.secondary.main};
    background: ${(props) => props.theme.palette.background.default};
    transform: scale(1.05);
  }
`;
