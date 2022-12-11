import { styled } from "@mui/material";

export const StyledRegisterGame = styled("div")`
    display: flex;
    justify-content: center;
    .container{
        z-index: 20;
        width: 100%;
        margin-top: 30px;
        .content{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            width: 65%;
            margin: 0 auto;
            padding: 0 10px;
            ${props => props.theme.breakpoints.down("md")}{
                width: 100%;
            }
        }
    }
    `