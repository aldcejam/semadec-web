import { SuapClient } from "../../../services/Login-Suap/client";
import { SuapApiSettings } from "../../../services/Login-Suap/settings";

export const SuapAuth = ()=>{
    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: process.env.SUAP_CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();


    
}
