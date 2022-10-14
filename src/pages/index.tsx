
import Head from 'next/head'
import HomePageCard from '../components/Organisms/HomePageCards/Index'
import PageTitle from '../components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../styles/global/globals'
import { StylePageIndex } from '../styles/Styled.index'
import { NextPage } from 'next'
import HomePageCards from '../components/templates/HomePageCards/Index'


const Home: NextPage = () => {
  const name = "aldcejam";
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <PageTitle title={`Bem vindo ${name}`} />

      <ContainerContentPage with_background_color='false'>
        <StylePageIndex className="box-page">
          <HomePageCards/>
        </StylePageIndex>
      </ContainerContentPage>
    </>
  )
}




export default Home
