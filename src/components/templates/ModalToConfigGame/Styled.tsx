import { styled } from "@mui/material/styles";

export const StyledModalToConfigGame = styled("section")`
  position: absolute;
  width: clamp(200px, 96vw, 800px);
  max-height: 95vh;
  min-height: 95vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.background.paper}75;
  backdrop-filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 30px 30px;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-right: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-left: 2px solid ${(props) => props.theme.palette.primary.main};
  border-top: 2px solid ${(props) => props.theme.palette.primary.main};
  h2 {
    font-size: clamp(1.4em, 3vw, 2.3rem);
    text-align: center;
    margin: 10px 0 20px;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;
    text-transform: capitalize;
  }

  .container {
    display: grid;
    grid-template:
      "cards cards"
      "positions-with-score situation"
      / 1fr 1fr;
    margin-top: 40px;
    gap: 50px;

    .cards {
      position: relative;
      grid-area: cards;
      width: 100%;
      display: flex;
      gap: 20px;
      justify-content: center;

      .card {
        position: relative;
        width: clamp(80px, 8vw, 110px);
        height: clamp(80px, 8vw, 110px);
      }
    }
    .positions-with-score {
        grid-area: positions-with-score;
        #demo-simple-select-helper-label{
            font-size: 1rem;
            
        }

      .input-material-ui {
        width: 80%;
      }
      .MuiOutlinedInput-root {
          label {
        }
        & fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.main};
            border-radius: ${(props) => props.theme.shape.borderRadius};
        }
        &.Mui-focused fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.dark};
        }
    }
    MuiInputLabel-root {
        padding-bottom: 10px;
      }
    }
    .situation {
      grid-area: situation;
    }
  }

  .pontuations{
      margin-top: 20px;

    .pontuation{
      display: flex;
      gap: 10px;
      align-items: baseline;
      p{
        font-size: 1.3rem;
        color: ${(props) => props.theme.palette.text.primary};
        font-weight: 600;
      }
      input{
        background-color: ${(props) => props.theme.palette.background.paper};
        border: 2px solid ${(props) => props.theme.palette.primary.dark};
        border-radius: ${(props) => props.theme.shape.borderRadius};
        color: ${(props) => props.theme.palette.text.secondary};
        font-size: 1.6rem;
        padding: 7px 10px 7px 6px;
        width: 70px;
        transition: 0.3s;

        :focus{
          outline: none;
          border: 2px solid ${(props) => props.theme.palette.primary.main};
          
        }
      }
    }
  }
`;
