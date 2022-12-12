import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from "../styles/CustomBackground"
import HomePageCards from '../../src/components/templates/HomePageCards/Index'
import { DateSuap } from '../lib/DataSuap'

const Home = () => {

  const resourse = DateSuap()

  return (
    <>
      <PageTitle title={`Bem vindo ${resourse.nome}`} />

      <ContainerContentPage>
        <HomePageCards />
      </ContainerContentPage>
    </>
  )
}

export default Home