import { useEffect, useState } from "react";
import { SuapClient } from "../../../../../../services/Login-Suap/client";
import { SuapApiSettings } from "../../../../../../services/Login-Suap/settings";
import { StyledButtonLoginSuap } from "./Styled"

const ButtonLoginSuap = () => {

    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();
    const [resourceResponse, setResourceResponse] = useState("");
    const [content, setContent] = useState(<></>);

    const SaveDataLoginSuap = (response: any) => {
        setResourceResponse(JSON.stringify(response.data));
    };


    useEffect(() => {
        if (NewSuapClient.isAuthenticated()) {
            NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap);
        }
        window.addEventListener(
            "message",
            (event) => {
                if (event.data === "reload") window.location.href = window.location.href;
            },
            false
        );
    }, []);



    useEffect(() => {
        setContent(
            <a
                href={NewSuapClient.getLoginURL() + ""}
                onClick={() => NewSuapClient.getLoginURL()}
            >
                <p className="icon">suap</p>
            </a>
        );
    }, [])


    return (
        <StyledButtonLoginSuap>
            {content}
        </StyledButtonLoginSuap>
    )
}

export default ButtonLoginSuap