import { styled } from "@mui/material/styles";

export const StyleForMoreThanTwoTeams = styled("div")`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }

&::-webkit-scrollbar-track {
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.palette.primary.dark}b5;
  border-radius: 20px;
  border: 5px solid ${({ theme }) => theme.palette.background.paper};
}

  .team {
    display: flex;
    align-items: baseline;
    gap: 5px;
    padding-bottom: 6px;
    &__logo {
      position: relative;
      width: 46px;
      height: 46px;
      top: 6px;
    }
  }

  .icon-versus {
    position: relative;
    width: 15px;
    height: 15px;
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
      background: ${(props) => props.theme.palette.primary.dark};
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
