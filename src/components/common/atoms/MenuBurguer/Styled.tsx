import {styled} from "@mui/material/styles";

interface TypesStyledMenuBurguer {
    menuisactive: string
}

const StyledMenuBurguer = styled('div')<TypesStyledMenuBurguer>(({ menuisactive, ...props }) => `
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 10;
    left: 10px;
    margin: 20px auto;
    cursor: pointer;
    ${props.theme.breakpoints.down('xs')}{  
        position: fixed;
        margin-left: 10px;
        transition: 0.3s;
        left: 0;
        top: 6px;
    }
    ${props.theme.breakpoints.down('sm')}{
        top: 8px;
    }
    
    .line{
        background: ${props.theme.palette.background.default};
        width: 30px;
        height: 3px;
        border-radius: 10px;
        transition: 0.5s;
        ${props.theme.breakpoints.down('xs')}{
            background: ${menuisactive == 'true' ? 'auto' : `${props.theme.palette.text.primary}`};
        }
    }
    .line:nth-of-type(1){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '8px' : '2px'};
        
    }
    .line:nth-of-type(2){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '-3px' : '4px'};
    }
    .line:nth-of-type(3){
        margin-top: ${menuisactive == 'true' ? '-3px' : '4px'};
        transform: ${menuisactive == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }

    ::before{
        /* content: '';
        position: absolute;
        width: 50px;
        height: 40px;
        border-radi
        border-radius: 10px;
        top: -10px;
        left: -12px;
        box-shadow: ${menuisactive == 'false' ? `0px 0px 60px ${props.theme.palette.primary.dark}90` : ''};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px; */

    
    
`)
const ewq = styled('div')`
background-color: #ffffffa0;
`



export default StyledMenuBurguer