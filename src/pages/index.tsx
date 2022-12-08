import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from "../styles/globals"
import HomePageCards from '../../src/components/templates/HomePageCards/Index'

const Home = () => {


  return (
    <>
      <PageTitle title={`Bem vindo `} />

      <ContainerContentPage>
        <HomePageCards />
      </ContainerContentPage>
    </>
  )
}

export default Home