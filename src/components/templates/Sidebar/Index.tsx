import { useState } from "react";
import MenuBurguer from "../../Atoms/MenuBurguer/Index";
import RedirectIcon from "../../Molecules/Sidebar/RedirectIcon/Index";
import Navegation from "../../Organisms/Sidebar/Navegation/Index";
import { StyledSidebar } from "./Styled";
import { StringsRoutes } from "../../../StringsRoutes";


const Sidebar = () => {
    const [menuisative, setmenuisative] = useState(false)
    return (
        <StyledSidebar menuisactive={menuisative.toString()}>
            <MenuBurguer menuisactive={menuisative} setmenuisative={setmenuisative} />
            <div className="redirect-home">
                <RedirectIcon
                    href={StringsRoutes.home}
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