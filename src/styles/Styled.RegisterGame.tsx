import { styled } from "@mui/material";

export const StyledRegisterGame = styled("div")`
    .container{
        .decorative-left,.decorative-right{
            position: absolute;
            top: 0;
            width: 20%;
            height: 100%;
        }
        .decorative-right{
            right: 0;
            transform: scaleX(-1);
        }
        z-index: 20;
        width: 100%;
        margin-top: 30px;
    }
    `