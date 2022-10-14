import { useState } from "react"
import MenuBurguer from "../../Atoms/MenuBurguer/Index"
import { StyledSidebarPage } from "./Styled"
import ButtonRedirectProfile from "../../Molecules/Sidebar/ButtonRedirectProfile/Index";
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
                icon="/icons/home.svg"
                text="Home"
                />
            </div>
            <Navegation />
        </StyledSidebarPage>
    )
}

export default SideBarPage;