import PageTitle from '../components/common/atoms/PageTitle/Index'
import ContentPage from "../styles/globals/ContentPage"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'
import { useSession } from "next-auth/react";
import { UseSuapUserData } from '../hooks/UseSuapUserData';
import { UseMainUserData } from '../hooks/UseMainUserData';

const Home = () => {

  const { data: session } = useSession();

  const SuapUserData = UseSuapUserData()
  
  const MainUserData = UseMainUserData()

  console.log(SuapUserData)

  const title = `Bem vindo ${MainUserData? MainUserData.name : ""} ${SuapUserData? SuapUserData.resource.nome : ""}`

  return (
    <>
      <PageTitle title={`${title}`} />

      <ContentPage>
        <HomePageCards />
      </ContentPage>
    </>
  )
}


export default Home





