import { styled } from "@mui/material/styles";

export const StyledFindGame = styled('div')`
    display: flex;
    justify-content: center;
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        
    }
    /* decoration */
    .decoration{
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -1;
        &::before{
            overflow: hidden;
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: clamp(220px, 25vw, 290px);
            height: clamp(220px, 25vw, 290px);
            background-color: ${props => props.theme.palette.secondary.main}c7;
            box-shadow: 0px 20px 32px 20px ${props => props.theme.palette.secondary.main}33;
            border-radius: 1000px;
            filter: blur(21px);
        }
        
    }
    .container{
        z-index: 20;
        margin-top: 50px;
        width: 100%;
        .svg-angleline:nth-of-type(1){
            position: absolute;
            height: 100%;
            min-height: 300px;
            width: 45%;
            min-width: 300px;
            top: 0;
            right: 0;
        }
        .svg-angleline:nth-of-type(2){
            position: absolute;
            height: 100%;
            min-height: 300px;
            width: 45%;
            min-width: 300px;
            bottom: 0;
            left: 0;
            transform: scaleX(-1);
            transform: rotate(180deg);
        }
    }

`