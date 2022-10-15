import { useState } from "react"
import MenuBurguer from "../../Atoms/MenuBurguer/Index"
import { StyledSidebarPage } from "./Styled"
import Navegation from "../../Organisms/Sidebar/Navegation/Index";
import RedirectIcon from "../../Molecules/Sidebar/RedirectIcon/Index";


const SideBarPage = () => {
    const [menuisative, setmenuisative] = useState(false)

    return (
        <StyledSidebarPage menuisactive={menuisative.toString()}>
            <MenuBurguer menuisactive={menuisative} setmenuisative={setmenuisative} />
            <div className="redirect-home">
                <RedirectIcon 
                href="/"
                icon="/Icons/home.svg"
                text="Home"
                />
            </div>
            <Navegation />
        </StyledSidebarPage>
    )
}

export default SideBarPage;