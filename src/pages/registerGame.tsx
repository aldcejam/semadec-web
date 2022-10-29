import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"
import PageTitle from "../components/Atoms/PageTitle/Index"
import SubmitButton from "../components/Atoms/SubmitButton.tsx/Index"
import AvailableSports from "../components/Organisms/RegisterGame/AvailableSports/Index"
import AvailableTeams from "../components/Organisms/RegisterGame/AvailableTeams/Index"
import ModalSelectCategorys from "../components/templates/ModalSelectCategorys/Index"
import { ContainerContentPage } from "../styles/global/globals"
import { StyledRegisterGame } from "../styles/Styled.RegisterGame"
import { DateForRegistrationProps } from "../Types/RegisterGame/TypesDateForRegistration"

const RegisterGame: NextPage = () => {

  const [dataForRegistration, setDataForRegistration] = useState<DateForRegistrationProps>({
    teams: [""],
    sport: {
      sportName: "",
      categorys: undefined,
      categoryGenre: [""],
      MaxNumberOfTeams: 0,
      MinNumberOfTeams: 0
    },
    userSelectedCategory: "",
    userSelectedCategoryGenre: "",
    gameSituation: "",
    gameDate: new Date(),
    scoreForFirst: 0,
    scoreForSecond: 0,
    scoreForThird: 0,
  })

  const SubmitOpenSelectCategorys = () => {
    if (dataForRegistration.teams.length > 2) {
      if (dataForRegistration.sport.sportName !== "") {
        if (dataForRegistration.sport.MinNumberOfTeams <= dataForRegistration.teams.length - 1) {
          if (dataForRegistration.sport.MaxNumberOfTeams >= dataForRegistration.teams.length - 1) {
            ToggleModal()
          }
          else {
            toast.error("Número de equipes maior que o necessário, por favor, desselecione alguma equipe")
          }

        }
        else {
          toast.error("Número de equipes menor que o necessário")
        }
      }
      else {
        toast.error("Selecione um esporte para continuar");
      }
    } else {
      toast.error("Selecione mais de um curso para continuar");

    }
  }

  const [modalCategorysOpen, setModalCategorysOpen] = useState(false)
  const ToggleModal = () => {
    modalCategorysOpen ? setModalCategorysOpen(false) : setModalCategorysOpen(true)
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
                Submit={SubmitOpenSelectCategorys}
                value="Selecionar categorias" />
            </div>
            <ModalSelectCategorys
              ToggleModal={ToggleModal}
              modalIsOpen={modalCategorysOpen}
              data={dataForRegistration}
              setdata={setDataForRegistration}

            />
          </div>
        </StyledRegisterGame>
      </ContainerContentPage>
    </>
  )
}

export default RegisterGame