import { SuapClient } from "../../../../../../services/Login-Suap/client";
import { SuapApiSettings } from "../../../../../../services/Login-Suap/settings";
import { StyledButtonLoginSuap } from "./Styled"

const ButtonLoginSuap = () => {

    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: process.env.SUAP_CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: process.env.SUAP_SCOPE,
    });

    console.log(process.env.GOOGLE_CLIENT_ID)
    NewSuapClient.init();

    return (
        <StyledButtonLoginSuap>
            <a
                href={NewSuapClient.getLoginURL() + ""}
                onClick={() => NewSuapClient.getLoginURL()}
            >
                <p className="icon">suap</p>
            </a>
        </StyledButtonLoginSuap>
    )
}

export default ButtonLoginSuap