import { useSidebarStateContext } from "../../../contexts/SidebarStateContext";
import { Routes } from "../../../Routes";
import MenuBurguer from "../../Atoms/MenuBurguer/Index";
import RedirectIcon from "../../Molecules/Sidebar/RedirectIcon/Index";
import Navegation from "../../Organisms/Sidebar/Navegation/Index";
import { StyledSidebar } from "./Styled";


const Sidebar = () => {
    const { CloseSidebar, sidebarState, ToggleStateSidebar } = useSidebarStateContext()

    return (
        <StyledSidebar menuisactive={sidebarState.toString()}>
            <MenuBurguer/>
            <div onClick={CloseSidebar} className="redirect-home">
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