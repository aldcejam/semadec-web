import styled from "@mui/material/styles/styled";

interface TypesStyledMenuBurguer {
    menuisactive: string
}

const StyledMenuBurguer = styled('div')<TypesStyledMenuBurguer>(({ menuisactive, ...props }) => `
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 10;
    left: 10px;
    margin: 25px auto;
    cursor: pointer;
    ${props.theme.breakpoints.down('xs')}{  
        position: fixed;
    }
    
    .line{
        background: ${props.theme.palette.background.default};
        width: 30px;
        height: 4px;
        border-radius: 10px;
        transition: 0.5s;
    }
    .line:nth-of-type(1){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '8px' : '2px'};
        
    }
    .line:nth-of-type(2){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '-4px' : '4px'};
    }
    .line:nth-of-type(3){
        margin-top: ${menuisactive == 'true' ? '-4px' : '4px'};
        transform: ${menuisactive == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }
    
    
`)

export default StyledMenuBurguer