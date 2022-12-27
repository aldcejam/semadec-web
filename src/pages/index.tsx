import PageTitle from '../components/common/atoms/PageTitle/Index'
import ContentPage from "../styles/globals/ContentPage"
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
      
      <ContentPage>
        <HomePageCards />
      </ContentPage>
    </>
  )
}

export default Home