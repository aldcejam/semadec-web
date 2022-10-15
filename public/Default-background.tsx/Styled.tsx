import styled from "@mui/material/styles/styled";

export const ContainerBackgroundPage = styled('div')`
    position: fixed;
    
    `

export const StyledBackgroundPage = styled('div')`
    position: absolute;
    top: 0;
    background-color: ${(props) => props.theme.palette.primary.light};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    &::before{
        z-index: 10;
        content: '';
        position: absolute;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(5px);

    }
    .cls-3, .cls-4, .cls-5, .cls-6, .cls-8, .cls-9, .cls-11, .cls-12{
        ${(props) => props.theme.breakpoints.down("sm")} {
            fill: none !important;
            stroke: none !important;
            border: none !important;
        }
    }
    .cls-5, .cls-6{
        
        ${(props) => props.theme.breakpoints.down("md")} {
            fill: none !important;
            stroke: none !important;
            border: none !important;
        }
    }
    /* small-Wave */
    .cls-1{
        fill: ${(props) => props.theme.palette.grey[900]}; 
    }
    /* big-Wave */
    .cls-2{
        fill: ${(props) => props.theme.palette.grey[600]}
    }
    /* Lines-Star */
    .cls-11{
        stroke: ${(props) => props.theme.palette.primary.contrastText};
    }
    .cls-12{
        stroke: ${(props) => props.theme.palette.primary.main};
    }
    /* Mini-Bals */
    .cls-3{
        fill: ${(props) => props.theme.palette.primary.main};
    }
    /* Rectangle */
    .cls-4{
        stroke: ${(props) => props.theme.palette.primary.main};
        fill: ${(props) => props.theme.palette.primary.main};
    }
    /* Cross */
    .cls-5{
        fill: ${(props) => props.theme.palette.primary.main};
    }
    .cls-6{
        fill: white;
    }
    /* Deline-Line */
    .cls-7{
        stroke: ${(props) => props.theme.palette.primary.main};
        filter: brightness(0.8);
    }
    .cls-9{
        stroke: ${(props) => props.theme.palette.primary.main};
        fill: none;
        border: 4px solid ${(props) => props.theme.palette.primary.main};
    }
    /* Star Ball */
    .Starball{
        background-color: #fff;
        box-shadow: rgb(255, 255, 255) 0px 54px 55px, rgb(255, 255, 255) 0px -12px 30px, rgba(255, 255, 255, 0.36) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.963) 0px -3px 5px;
    }
`
export const WaveTopCls1 = styled('div')`
    position: absolute;
    z-index: 5;
    width: clamp(400px, 38vw,780px);
    .cls-1{
    }
`
export const WaveTopCls2 = styled('div')`
    z-index: 3;
    position: absolute;
    width: clamp(500px, 46vw, 900px);
`
export const WaveBottomCls1 = styled('div')`
    position: absolute ;
    z-index:5;
    bottom: -5px;
    right: -5px;
    width: clamp(450px, 45vw, 900px);
`
export const WaveBottomCls2 = styled('div')`
    position: absolute ;
    z-index:3;
    bottom: -5px;
    right: -5px;
    width: clamp(500px, 50vw, 1000px);
    
`
export const MiniBalsTopCls3 = styled('div')`
    position: absolute ;
    z-index: 2;
    top: 0;
    right: -5px;
    width: clamp(200px, 20vw, 350px);
    `
export const MiniBalsBottomCls3 = styled('div')`
    position: absolute ;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: clamp(180px, 22vw, 310px);
    transform: rotate(180deg);
`
export const RectangleTopCls4 = styled('div')`
    position: absolute ;
    z-index: 7;
    top: clamp(20px,5vh,25px);
    left: max(6vw,50px);
    width: clamp(70px, 7vw, 120px);
    transform: rotate(180deg);
`
export const RectangleBottomCls4 = styled('div')`
    position: absolute ;
    z-index: 7;
    bottom: clamp(20px,5vh,25px);
    right: max(6vw,50px);
    width: clamp(70px, 7vw, 120px);
            
`
export const Cross1Cls5 = styled('div')`
    width: 18px;
    position: absolute;
    right: clamp(300px,25vw,700px);
    top: 10vh;
    z-index: 9;
    svg{
        animation: spin 28000s infinite;
    }
    @media(max-width:500px){
        right: 40vw;
    }
`
export const Cross2Cls5 = styled('div')`
    width: 12px;
    position: absolute;
    left: clamp(200px,25vw,700px);
    bottom: 10vh;
    z-index: 9;
    svg{
        animation: spin 40000s infinite;
    }
    @media(max-width:500px){
        left: 40vw
    }
`
export const Cross1Cls6 = styled('div')`
    width: 20px;
    position: absolute;
    right: 20vw;
    bottom: 20vh;
    z-index: 9;
    
    @media(max-width:500px){
        right: 10vw;
    }
`
export const Cross2Cls6 = styled('div')`
    width: 15px;
    position: absolute;
    left: clamp(200px,25vw,700px);
    top: 20vh;
    z-index: 9;
    @media(max-width:500px){
        right: 10vw;
    }
`
export const DelineLineBottomCls7 = styled('div')`
    position: absolute ;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: clamp(370px, 35vw, 1000px);
            
`
export const DelineLineTopCls7 = styled('div')`
    position: absolute ;
    top: 0;
    left: 0;
    z-index: 1;
    width: clamp(500px, 50vw, 600px);
            
`
export const Circle1Cls9 = styled('div')`
    position: absolute ;
    z-index: 1;
    bottom: max(15vh,50px);
    left: max(12vw,50px);
    width: clamp(200px, 30vw, 250px);
        
    @media (max-width: 600px) {
        .cls-9{
            stroke: none !important;
        }
        
    }
            
`
export const Circle2Cls9 = styled('div')`
    position: absolute ;
    z-index: 1;
    top: -210px;
    right: -180px;
    border-radius: 100%;
    width: clamp(400px, 36vw, 550px);
    border-radius: 100vw;
    .cls-9{
        stroke: none !important;   
    }
            
`
export const Circle3Cls9 = styled('div')`
    position: absolute ;
    z-index: 7;
    bottom: -280px;
    right: 20vw;
    width: clamp(350px, 35vw, 450px);
    
            
`
export const Line2Cls11 = styled('div')`
    position: absolute ;
    left: 3vw;
    top: 57vh;
    z-index: 9;
    width: 70px;
            
`
export const Line3Cls12 = styled('div')`
    position: absolute ;
    right: 20vw;
    bottom: 10vh;
    z-index: 9;
    width: 40px;
`
export const Line6Cls11 = styled('div')`
    position: absolute ;
    right: 40vw;
    top: 15vh;
    z-index: 9;
    width: 50px;
   
            
`
export const Line7Cls11 = styled('div')`
    position: absolute ;
    left: 10vw;
    top: 10vh;
    z-index: 9;
    width: 50px;

            
`
export const StarBall1 = styled('div')`
    position: absolute;
    width: 7px;
    height: 7px;
    left: 20vw;
    top: 13vh;
    z-index: 9;
    border-radius: 99px;

`
export const StarBall2 = styled('div')`
    position: absolute;
    left: 54vw;
    top: 45vh;
    z-index: 9;
    border-radius: 99px;
    width: 9px;
    height: 9px;
`
export const StarBall3 = styled('div')`
    position: absolute;
    left: 70vw;
    top: 30vh;
    z-index: 9;
    border-radius: 99px;
    width: 7px;
    height: 7px;
   
`
export const StarBall4 = styled('div')`
    position: absolute;
    left: 30vw;
    top: 60vh;
    z-index: 9;
    border-radius: 99px;
    width: 7px;
    height: 7px;    
`
export const StarBall5 = styled('div')`
    position: absolute;
    left: 90vw;
    top: 66vh;
    z-index: 9;
    border-radius: 99px;
    width: 10px;
    height: 5px;
    animation: StarBallUp2 20s infinite reverse;
    @keyframes StarBallUp2 {
        0%{
            width: 7px;
            height: 7px;
            left: 90vw;
            top: 66vh;
        }
        25%{
            left: 99vw;
            top: 75vh;
            
        }
        50%{
            width: 8px;
            height: 8px; 
            left: 80vw;
            top: 90vh;
        } 
        100%{
          width: 7px;
          height: 7px;
        } 
    }
`
