import { SuapClient } from "../../../services/Login-Suap/SuapClient";
import { SuapApiSettings } from "../../../services/Login-Suap/SuapApiSettings";

export const SuapAuth = ()=>{
    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();
    const getLoginURL = NewSuapClient.getLoginURL;
    
    return {getLoginURL}
    
}
