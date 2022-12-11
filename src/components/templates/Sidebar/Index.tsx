import { useState } from "react";
import { Routes } from "../../../Routes";
import MenuBurguer from "../../Atoms/MenuBurguer/Index";
import RedirectIcon from "../../Molecules/Sidebar/RedirectIcon/Index";
import Navegation from "../../Organisms/Sidebar/Navegation/Index";
import { StyledSidebar } from "./Styled";


const Sidebar = () => {
    const [menuisative, setmenuisative] = useState(false)
    return (
        <StyledSidebar menuisactive={menuisative.toString()}>
            <MenuBurguer menuisactive={menuisative} setmenuisative={setmenuisative} />
            <div className="redirect-home">
                <RedirectIcon
                    href={Routes.home}
                    icon="/Icons/home.svg"
                    text="Home"
                    alt="icone de redirecionamento"
                />
            </div>
            <Navegation />
        </StyledSidebar>
    )
}

export default Sidebar;