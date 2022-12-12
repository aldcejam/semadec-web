import { useSidebarStateContext } from "../../../../contexts/SidebarStateContext"
import ButtonRedirectProfile from "../../../Molecules/Sidebar/ButtonRedirectProfile/Index"
import RedirectIcon from "../../../Molecules/Sidebar/RedirectIcon/Index"
import { StyledNavegation } from "./Styled"

const Navegation = () => {

    const { CloseSidebar } = useSidebarStateContext()
    return (
        <StyledNavegation>
            <ul className="container">
                <div onClick={CloseSidebar} className="item">
                    <ButtonRedirectProfile/>
                </div>
                <div onClick={CloseSidebar} className="item">
                    <RedirectIcon
                        href="/"
                        text="sair"
                        alt="icone de redirecionamento"
                        icon="/Icons/log-out.svg"
                    />
                </div>
            </ul >
        </StyledNavegation>
    )
}
export default Navegation