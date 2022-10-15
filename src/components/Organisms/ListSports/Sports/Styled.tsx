import styled from "@mui/material/styles/styled";

export const StyledSports = styled("div")`
            display: flex ;
            justify-content: center;
            gap: 20px;
            ${(props) => props.theme.breakpoints.down('xs')}{
                gap: 10px;
            }
            
            .sports__left,.sports__right{
                display: grid;
                gap: 10px;
                padding: 20px;
                text-align: center;
                background-color: ${props => props.theme.palette.primary.light}1a;
                backdrop-filter: blur(10px);
                border: 1px solid ${props => props.theme.palette.primary.dark}91;
                border-radius: 10px;

                ${(props) => props.theme.breakpoints.down('xs')}{
                    padding: 10px;
                }
                
                
            
        }
`