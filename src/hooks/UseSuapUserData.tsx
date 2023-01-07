import { useEffect, useState } from "react";
import { SuapClient } from "../services/Login-Suap/SuapClient";
import { SuapApiSettings } from "../services/Login-Suap/SuapApiSettings";


export const UseSuapUserData = () => {
    type SuapUserContentProps = {
        cpf: string
        data_nascimento: string
        email: string
        id: number
        matricula: string
        naturalidade: string
        nome_usual: string
        rg: string
        tipo_sanguineo: string
        tipo_vinculo: string
        url_foto_75x100: string
        url_foto_150x200: string
        vinculo: {
            campus: string
            cota_mec: string
            cota_sistec: string
            curriculo_lattes: string
            curso: string
            linha_pesquisa: any
            matricula: string
            matricula_regular: boolean
            nome: string
            situacao: string
            situacao_sistemica: string
        }
    }

    const NewSuapClient = SuapClient({
        authHost: SuapApiSettings.SUAP_URL,
        clientID: SuapApiSettings.CLIENT_ID,
        redirectURI: SuapApiSettings.REDIRECT_URI,
        scope: SuapApiSettings.SCOPE,
    });

    NewSuapClient.init();
    const [resourceResponse, setResourceResponse] = useState<SuapUserContentProps>({}as SuapUserContentProps);

    const SaveDataLoginSuap = (response: any) => {
        setResourceResponse(JSON.parse(JSON.stringify(response.data)));
    };

    useEffect(() => {
        if (NewSuapClient.isAuthenticated()) {
            NewSuapClient.getResource(SuapApiSettings.SCOPE, SaveDataLoginSuap);
        }
    }, []);

    return (
        {
            resource: resourceResponse,
            situationLoginSuap: NewSuapClient.isAuthenticated()
        }
    )


}