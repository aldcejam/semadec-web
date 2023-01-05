import PageTitle from '../components/common/atoms/PageTitle/Index'
import ContentPage from "../styles/globals/ContentPage"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'
import { useSession } from "next-auth/react";
import { SuapClient } from '../services/Login-Suap/client';
import { SuapApiSettings } from '../services/Login-Suap/settings';
import { useState, useEffect } from "react"

const Home = () => {

  const { data: session } = useSession();

  const NewSuapClient = SuapClient({
    authHost: SuapApiSettings.SUAP_URL,
    clientID: SuapApiSettings.CLIENT_ID,
    redirectURI: SuapApiSettings.REDIRECT_URI,
    scope: SuapApiSettings.SCOPE,
  });

  NewSuapClient.init();
  const [resourceResponse, setResourceResponse] = useState("");

  const SaveDataLoginSuap = (response: any) => {
    setResourceResponse(JSON.parse(JSON.stringify(response.data)));
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

  console.log(resourceResponse)

  return (
    <>
      <PageTitle title={`Bem vindo ${session? session?.user?.name : ""} ${resourceResponse? resourceResponse.nome:""}`} />

      <ContentPage>
        <HomePageCards />
      </ContentPage>
    </>
  )
}

export default Home





