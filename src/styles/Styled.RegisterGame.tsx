import { styled } from "@mui/material";

export const StyledRegisterGame = styled("div")`
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
}
    .container{
        z-index: 20;
        width: 100%;
        margin-top: 30px;
        .decorative-left,.decorative-right{
            position: absolute;
            top: 0;
            width: 20%;
            height: 100%;
            ${props => props.theme.breakpoints.down("md")}{
                display: none;
            }
        }
        .decorative-right{
            right: 0;
            transform: scaleX(-1);
        }
        .contant{
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