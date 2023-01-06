import { useEffect, useState } from "react";
import { SuapClient } from "../services/Login-Suap/client";
import { SuapApiSettings } from "../services/Login-Suap/settings";


export const UseSuapUserData = () => {

    type SuapUserContentProps = {
        campus: string
        cpf: string
        data_de_nascimento: string
        email: string
        email_academico: string
        email_google_classroom: string
        email_preferencial: string
        email_secundario: string
        identificacao: string
        nome: string
        primeiro_nome: string
        sexo: string
        ultimo_nome: string
    }

    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();
    const [resourceResponse, setResourceResponse] = useState<SuapUserContentProps>({} as SuapUserContentProps);

    const SaveDataLoginSuap = (response: any) => {
        setResourceResponse(JSON.parse(JSON.stringify(response.data)));
    };

    useEffect(() => {
        if (NewSuapClient.isAuthenticated()) {
            NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap);
        }
    }, []);

    return(
        {
            resource: resourceResponse,
            situationLoginSuap: NewSuapClient.isAuthenticated()
        }
    )


}