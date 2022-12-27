import { useState } from "react"

import PageTitle from "../../../components/common/atoms/PageTitle/Index"
import ContentPage from "../../../styles/globals/ContentPage"

import { StyledRegisterGame } from "../../../styles/Pages/StyledRegisterGame"

import { toast } from "react-toastify"

import ModalSelectCategorys from "../../../components/common/template/ModalSelectCategorys/Index"
import ModalToConfigGame from "../../../components/common/template/ModalToConfigGame/Index"

import { DataForGameRegistrationProps } from "../../../Types/DataForGameRegistrationProps"
import ChooseDispute from "../../../components/specificPerPage/game/register/template/ChooseDispute/Index"



const Register = ()=> {
    
    const [modalSelectCategorysOpen, setModalSelectCategorysOpen] = useState(false)
    const [modalToConfigGame, setModalToConfigGame] = useState(false)
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


    const ToggleModalSelectCategorys = () => {
        modalSelectCategorysOpen ? setModalSelectCategorysOpen(false) : setModalSelectCategorysOpen(true)
    }

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

    


    return (
        <>
            <PageTitle title={`Bem vindo `} />

            <ContentPage>
                <StyledRegisterGame className="box-page">
                    <div className="style-background" />
                    <div className="container">
                        <ChooseDispute 
                            dataForRegistration={dataForRegistration}
                            setDataForRegistration={setDataForRegistration}
                            SubmitOpenSelectCategorys={SubmitOpenSelectCategorys}
                        />
                        <ModalSelectCategorys
                            ToggleModal={ToggleModalSelectCategorys}
                            modalIsOpen={modalSelectCategorysOpen}
                            data={dataForRegistration}
                            setdata={setDataForRegistration}
                            Submit={SubmitOpenModalToConfigGame}
                        />
                        <ModalToConfigGame
                            ToggleModal={SubmitOpenModalToConfigGame}
                            modalIsOpen={modalToConfigGame}
                            dataForRegistration={dataForRegistration}
                            setDataForRegistration={setDataForRegistration}
                        />
                    </div>
                </StyledRegisterGame>
            </ContentPage>
        </>
    )
}

export default Register