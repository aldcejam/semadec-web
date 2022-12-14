import { styled } from "@mui/material/styles";

export const StyledModalSelectCategorys = styled("section")`
    position: absolute;
    width: clamp(200px, 100%, 400px);
    max-height: 95vh;

    border-radius: ${props => props.theme.shape.borderRadius}px;
    border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
    border-right: 2px solid ${props => props.theme.palette.secondary.main};
    border-left: 2px solid ${props => props.theme.palette.primary.main};
    border-top: 2px solid ${props => props.theme.palette.primary.main};
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    
    background-color: ${props => props.theme.palette.background.paper}75;
    backdrop-filter: blur(50px);
    padding: 30px;
    display: grid;
    gap: 20px;

    
    ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.primary.dark}b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.primary.dark};
  }

    .titles{
        text-align: center;
        h4{
            margin: 0;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: ${props => props.theme.palette.text.primary};
        }
        h5{
            margin: 5px 0 10px;
            color: ${props => props.theme.palette.text.secondary};
            font-weight: 500;
            font-size: 0.7rem;
        }
    }


`
