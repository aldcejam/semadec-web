import PageTitle from '../components/common/atoms/PageTitle/Index'
import { ContainerContentPage } from "../styles/CustomBackground"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'

import GetAllFlags from './api/graphql/Query/GetAllFlags'
import { useEffect } from 'react'
import CreateFlag from './api/graphql/Mutation/CreateFlag'


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