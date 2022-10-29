import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import PageTitle from "../components/Atoms/PageTitle/Index"
import AvailableTeams from "../components/Organisms/RegisterGame/AvailableTeams/Index"
import { ContainerContentPage } from "../styles/global/globals"
import { StyledRegisterGame } from "../styles/Styled.RegisterGame"
import { DateForRegistrationProps } from "../Types/RegisterGame/TypesDateForRegistration"

const Profile: NextPage = () => {

  const [dataForRegistration, setDataForRegistration] = useState<DateForRegistrationProps>({
    teams: [""],
    sportName: "",
    sportCategory: "",
    sportGenre: "",
    gameSituation: "",
    gameDate: new Date(),
    scoreForFirst: 0,
    scoreForSecond: 0,
    scoreForThird: 0,
  })


  return (
    <>
      <Head>
        <title>Registra jogo</title>
      </Head>

      <PageTitle title={`Perfil`} />

      <ContainerContentPage with_background_color='true'>
        <StyledRegisterGame className="box-page">
          <div className="container">
            <div className="decorative-left">
              <Image src={"/format/doubleTriangle.svg"} layout="fill" />
            </div>
            <div className="decorative-right">
              <Image src={"/format/doubleTriangle.svg"} layout="fill" />
            </div>
            <AvailableTeams
              setDataForRegistration={setDataForRegistration}
              dataForRegistration={dataForRegistration} />
          </div>
        </StyledRegisterGame>
      </ContainerContentPage>
    </>
  )
}

export default Profile