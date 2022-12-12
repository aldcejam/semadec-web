import { useState } from "react"

import { ContainerContentPage } from "../../../styles/CustomBackground"
import { StyledRegisterGame } from "../../../styles/Pages/StyledRegisterGame"

import { toast } from "react-toastify"

import PageTitle from "../../../components/Atoms/PageTitle/Index"
import SubmitButton from "../../../components/Atoms/SubmitButton.tsx/Index"
import AvailableSports from "../../../components/Organisms/RegisterGame/AvailableSports/Index"
import AvailableTeams from "../../../components/Organisms/RegisterGame/AvailableTeams/Index"
import ModalSelectCategorys from "../../../components/templates/ModalSelectCategorys/Index"
import ModalToConfigGame from "../../../components/templates/ModalToConfigGame/Index"

import { DataForGameRegistrationProps } from "../../../Types/DataForGameRegistrationProps"



const Register = ()=> {

    const [dataForRegistration, setDataForRegistration] = useState<DataForGameRegistrationProps>({
        teams: [{
            teamName: "",
            teamLogo: ""
        }],
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: [""],
            MaxNumberOfTeams: 0,
            MinNumberOfTeams: 0
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: "",
        gameDate: new Date(),
        pontuationsGame: [{ position: 0, score: 10 }],
        gameSituation: "em andamento",
    })



    const SubmitOpenSelectCategorys = () => {
        if (dataForRegistration.teams.length > 2) {
            if (dataForRegistration.sport.sportName !== "") {
                if (dataForRegistration.sport.MinNumberOfTeams <= dataForRegistration.teams.length - 1) {
                    if (dataForRegistration.sport.MaxNumberOfTeams >= dataForRegistration.teams.length - 1) {
                        ToggleModalSelectCategorys()
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

    const SubmitOpenModalToConfigGame = () => {
        modalToConfigGame ? setModalToConfigGame(false) : setModalToConfigGame(true)
    }

    const [modalSelectCategorysOpen, setModalSelectCategorysOpen] = useState(false)
    const ToggleModalSelectCategorys = () => {
        modalSelectCategorysOpen ? setModalSelectCategorysOpen(false) : setModalSelectCategorysOpen(true)
    }

    const [modalToConfigGame, setModalToConfigGame] = useState(false)


    return (
        <>
            <PageTitle title={`Bem vindo `} />

            <ContainerContentPage>
                <StyledRegisterGame className="box-page">
                    <div className="style-background" />
                    <div className="container">

                        <div className="content">
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
                            ToggleModal={ToggleModalSelectCategorys}
                            modalIsOpen={modalSelectCategorysOpen}
                            data={dataForRegistration}
                            setdata={setDataForRegistration}
                            Submit={SubmitOpenModalToConfigGame}
                        />
                        <ModalToConfigGame
                            modalIsOpen={modalToConfigGame}
                            ToggleModal={SubmitOpenModalToConfigGame}
                            dataForRegistration={dataForRegistration}
                            setDataForRegistration={setDataForRegistration}
                        />
                    </div>
                </StyledRegisterGame>
            </ContainerContentPage>
        </>
    )
}

export default Register