import RedirectIcon from "../../../molecules/Sidebar/RedirectIcon/Index"
import { StyledButtonLogOut } from "./Styled"
import { useSession, signOut } from "next-auth/react";
import { SuapClient } from "../../../../../services/Login-Suap/client";
import { SuapApiSettings } from "../../../../../services/Login-Suap/settings";

const ButtonLogOut = () => {

    const { data: session, status } = useSession()
    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });
    NewSuapClient.init();

    const HanddleLogOut = () => {
        if (status == "authenticated") {
            signOut()
        }
        else {
            NewSuapClient.logout()
        }
    }

    return (
        <StyledButtonLogOut onClick={() => NewSuapClient.logout()}>
            <RedirectIcon
                href="/"
                text="sair"
                alt="icone de redirecionamento"
                icon="/Icons/log-out.svg"
            />
        </StyledButtonLogOut>
    )
}

export default ButtonLogOut