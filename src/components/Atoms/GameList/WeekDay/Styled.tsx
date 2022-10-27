import { styled } from "@mui/material";

export const StyledWeekDay = styled("h3")`
  color: ${(props) => props.theme.palette.text.primary};
  text-align: right;
  padding-bottom: 7px;
  border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  font-weight: 500;
`;
