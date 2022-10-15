import {styled} from "@mui/material/styles";

export const StyledTitle = styled("div")`
text-align: center;
            h2{
                color: ${props => props.theme.palette.text.primary};
                margin: 0;
                font-size: 1.4rem;
            }
            h3{
                color: ${props => props.theme.palette.text.secondary}cc;
                margin: 4px 0 50px;
                font-size: 0.8rem;
                
            }


`