import { useSidebarStateContext } from "../../../../../contexts/SidebarStateContext"
import ButtonRedirectProfile from "../../../molecules/Sidebar/ButtonRedirectProfile/Index"
import { StyledNavegation } from "./Styled"
import ButtonLogOut from "../../../atoms/Buttons/LogOut/Index";

const Navegation = () => {

    const { CloseSidebar } = useSidebarStateContext()
    return (
        <StyledNavegation>
            <ul className="container">
                <div onClick={CloseSidebar} className="item">
                    <ButtonRedirectProfile />
                </div>
                <ButtonLogOut />
            </ul >
        </StyledNavegation>
    )
}
export default Navegation