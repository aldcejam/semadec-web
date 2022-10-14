import StyledMenuBurguer from "./Styled"

interface TypesMenuBurguer{
    menuisactive:boolean
    setmenuisative: any
}

const MenuBurguer = ({menuisactive, setmenuisative}:TypesMenuBurguer) => {
    
    
    return (
        <StyledMenuBurguer menuisactive={menuisactive.toString()} onClick={() => menuisactive ? setmenuisative(false) : setmenuisative(true)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </StyledMenuBurguer>
        
    )
}

export default MenuBurguer;