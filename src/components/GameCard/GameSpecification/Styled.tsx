import { styled } from "@mui/material";

export const StyledGameSpecification = styled("div")`
  display: grid;
  position: absolute;
  right: 10px;
  bottom: 0;
  color: ${props => props.theme.palette.text.primary};
  text-transform: uppercase;
  padding: 10px 15px;
  text-align: right;
  
  .teams-competing {
      font-weight: 700;
    display: flex;
    align-items: baseline;
    justify-content: right;
    gap: 4px;
    &__confront{
      display: flex;
      gap: 4px;
      align-items: baseline;
      p{
          margin: 0;
          font-size: 0.7rem;
      }
      .confront--icon-versus {
          position: relative;
          width: 8px;
          height: 8px;
          &::before,
        &::after {
            content: "";
          position: absolute;
          height: 100%;
          width: 1px;
          right: 0;
          left: 0;
          margin: auto;
          background-color: ${props => props.theme.palette.secondary.main};
          border-radius: 100px;
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
          transform: rotate(-45deg);
        }
      }
    }
  }
  .game-situation {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 4px;
      
      p{
          font-size: 0.7rem;
          margin: 0;
        }
    .circle{
        width: 10px;
        height: 10px;
        border: 1px solid white;
        border-radius: 100px;
        background-color: ${props => props.theme.palette.success.light};
    }
  }
  .game-date {
    font-weight: 600;
    font-size: 0.7rem;
  }
`;
