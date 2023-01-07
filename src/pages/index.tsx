import ContentPage from "../styles/globals/ContentPage"
import HomePageCards from '../components/specificPerPage/index/template/HomePageCards/Index'
import { usePageTitleContext } from "./_app"
import { UseSuapUserData } from "../hooks/UseSuapUserData"
import { useEffect } from "react"

const Home = () => {

  const { usePageTitle } = usePageTitleContext()
  useEffect(() => {
    usePageTitle.setPageTitle('Bem vindo')
  }, [])

  const SuapUserData = UseSuapUserData()

  console.log(SuapUserData)


  return (
    <ContentPage>
      <HomePageCards />
    </ContentPage>
  )
}


export default Home





