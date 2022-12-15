import PageTitle from '../components/common/atoms/PageTitle/Index'
import { ContainerContentPage } from "../styles/CustomBackground"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'

import GetAllFlags from './api/Query/getAllFlags'
import { useEffect } from 'react'
import CreateFlag from './api/Mutation/CreateFlag'


const Home = () => {

  useEffect(() => {
    CreateFlag("bolsista")
    GetAllFlags()
  }, [])

  return (
    <>
      <PageTitle title={`Bem vindo`} />

      <ContainerContentPage>
        <HomePageCards />
      </ContainerContentPage>
    </>
  )
}

export default Home