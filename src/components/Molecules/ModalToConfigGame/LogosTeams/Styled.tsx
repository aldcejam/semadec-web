import { styled } from "@mui/material";

export const StyledLogoTeams = styled("div")`
        
    position: relative;
      grid-area: cards;
      width: 100%;
      display: flex;
      gap: 20px;
      justify-content: center;

      .card{
        .image {
          position: relative;
          width: 80px;
          height: 80px;
          
        }
        p{
          text-align: center;
          margin: 2px;
          color: ${(props) => props.theme.palette.text.primary};
          text-transform: uppercase;
          font-weight: 600;
          font-size: 1.1rem;
        }
      }
`