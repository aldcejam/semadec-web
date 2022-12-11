import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { useState } from "react";
import ListSports from "../../src/components/templates/ListSports/Index";
import ModalSelectCategorys from "../../src/components/templates/ModalSelectCategorys/Index";
import { DataForGameResearchProps } from "../Types/DataForGameResearchProps";
import { ContainerContentPage } from "../styles/CustomBackground";
import { StyleFindGame } from "../styles/Pages/StyledFindGame";
import { useSearchParams } from 'next/navigation'

const FindGame = () => {

    const searchParams = useSearchParams()
    const course = searchParams.get('curso')


    const [dataForSearchBySportCategories, setDataForSearchBySportCategories] = useState<DataForGameResearchProps>({
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: []
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: ""
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ToggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    const Submit = () => {
        const category = dataForSearchBySportCategories.userSelectedCategory
        const categoryGenre = dataForSearchBySportCategories.userSelectedCategoryGenre
        const sportSelected = dataForSearchBySportCategories.sport.sportName
        //url with category and categoryGenre and sportSelected if they are not undefined
        const redirectUrl = `games?${category ?`category=${category}&` : ""}${categoryGenre ?`categoryGenre=${categoryGenre}&` : ""}${sportSelected ?`sportSelected=${sportSelected}` : ""}`

        window.location.href = redirectUrl
    }
    console.log(dataForSearchBySportCategories)

    return (
        <>
            <PageTitle title={`Encontrar jogo`} />

            <ContainerContentPage>
                <StyleFindGame className="box-page">
                    <div className="container">
                        <div className="decoration" />
                        <ListSports
                            ToggleModal={ToggleModal}
                            setDataForSearchBySportCategories={setDataForSearchBySportCategories}
                            course={course ? course : "não há curso selecionado no seu perfil"} />
                        <ModalSelectCategorys
                            ToggleModal={ToggleModal}
                            modalIsOpen={modalIsOpen}
                            data={dataForSearchBySportCategories}
                            setdata={setDataForSearchBySportCategories}
                            Submit={Submit}
                        />
                    </div>
                </StyleFindGame>
            </ContainerContentPage>
        </>
    )
}

export default FindGame