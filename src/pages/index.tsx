import PageTitle from '../components/common/atoms/PageTitle/Index'
import { ContainerContentPage } from "../styles/CustomBackground"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'
/* import { DateSuap } from '../lib/DataSuap'
import useSWR from 'swr'
import axios from 'axios' */

/* const fetcher = (query) =>
  axios.post('https://rickandmortyapi.com/graphql', { query })
    .then(res => res.data)

const QUERY = `
    query {
      character(id: 1){
        name
      }
    }
    ` */


const Home = () => {

  /* const { data } = useSWR(QUERY, fetcher) */

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