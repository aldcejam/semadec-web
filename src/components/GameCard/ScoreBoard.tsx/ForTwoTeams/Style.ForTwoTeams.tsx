import {styled} from "@mui/material/styles";

export const StyleForTwoTeams = styled("div")`
  display: flex;
  align-items: baseline;
  gap: 10px;
  
  .team {
    display: flex;
    align-items: baseline;
    gap: 10px;
    &:nth-of-type(2) {
      flex-direction: row-reverse;
    }
    &__logo {
      position: relative;
      width: clamp(45px, 20vw, 53px);
      height: clamp(45px, 20vw, 53px);
      top: 6px;
    }
    &__score {
      font-size: 1.5rem;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  .icon-versus {
    position: relative;
    width: 15px;
    height: 15px;
    padding-top: 2px;

    &::after, &::before{
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      right: 0;
      left: 0;
      margin: auto;
      background: ${props => props.theme.palette.primary.dark};
      border-radius: 100px;

    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
`;
