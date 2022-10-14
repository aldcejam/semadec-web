import { styled } from "@mui/material";

export const StyledGame = styled('div')`
    .style-background{
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom: 10px solid ${props => props.theme.palette.secondary.main};
        border-right: 10px solid ${props => props.theme.palette.secondary.main};
        border-left: 10px solid ${props => props.theme.palette.primary.main};
        border-top: 10px solid ${props => props.theme.palette.primary.main};
        filter: blur(40px);
        border-radius: 45px;
        div{
            position: absolute;
            background-color: #ffffffc5;
            background-color: ${props => props.theme.palette.secondary.main}c5;
            width: clamp(260px, 31vw, 330px);
            height: clamp(260px, 31vw, 330px);
            border-radius: 31000px;
            filter: blur(20px);
            bottom: -50px;
            right: -50px;
        }
    }

    .container{
        z-index: 20;
        width: 100%;
        padding: 0 30px;
        h2{
            font-weight: 600;
            font-size: 1.8rem;
            color: ${props => props.theme.palette.text.primary};
        }

        &__segunda{
            position: relative;
            h3{
                color: ${props => props.theme.palette.text.primary};
                text-align: right;
                padding-bottom: 7px;
                border-bottom: 2px solid ${props => props.theme.palette.primary.main};
                font-size: 1.5rem;
                font-weight: 500;
            }
            
            
            .segunda__cards{
                position: relative;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                ${props => props.theme.breakpoints.down("md")}{
                    grid-template-columns: repeat(2, 1fr);
                }
                ${props => props.theme.breakpoints.down("sm")}{
                    grid-template-columns: repeat(1, 1fr);
                }
                grid-auto-rows: 140px;
                gap: 20px;
                
            }
        }
    }

`