import styled from "@mui/material/styles/styled";

export const StyledGameCard = styled("article")`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 10px 23px ${(props) => props.theme.palette.secondary.main}4c,
    inset 5px 5px 23px ${(props) => props.theme.palette.primary.dark}19;
  border-top: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-left: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.main}bc;
  border-right: 1px solid ${(props) => props.theme.palette.secondary.main}bc;

  .svg-curver-border-button {
    position: absolute;
    bottom: 0;
    width: min(50%, 130px);
    svg {
      position: absolute;
      bottom: 0;
    }
  }
  .game-score {
    padding: 10px 15px;
    &__only-two-teams {
      .team {
      }
    }
    &__more-than-two-teams {
      .more-than-two-teams__teams {
        
      }
    }
  }
`;