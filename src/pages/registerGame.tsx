import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import PageTitle from "../components/Atoms/PageTitle/Index"
import SubmitButton from "../components/Atoms/SubmitButton.tsx/Index"
import AvailableSports from "../components/Organisms/RegisterGame/AvailableSports/Index"
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

  const [modalOpen, setModalOpen] = useState(false)
  const ToggleModal = ()=>{
    modalOpen ? setModalOpen(false) : setModalOpen(true)
  }

  return (
    <>
      <Head>
        <title>Registra jogo</title>
      </Head>

      <PageTitle title={`Perfil`} />

      <ContainerContentPage with_background_color='true'>
        <StyledRegisterGame className="box-page">
          <div className="style-background" />
          <div className="container">
            <div className="decorative-left">
              <Image src={"/format/doubleTriangle.svg"} layout="fill" />
            </div>
            <div className="decorative-right">
              <Image src={"/format/doubleTriangle.svg"} layout="fill" />
            </div>
            <div className="contant">
              <AvailableTeams
                setDataForRegistration={setDataForRegistration}
                dataForRegistration={dataForRegistration} />
              <AvailableSports
                setDataForRegistration={setDataForRegistration}
                dataForRegistration={dataForRegistration}
              />
            <SubmitButton 
            Submit={ToggleModal}
            value="Selecionar categorias"/>
            </div>
          </div>
        </StyledRegisterGame>
      </ContainerContentPage>
    </>
  )
}

export default Profile