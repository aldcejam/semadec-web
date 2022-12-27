import PageTitle from '../../../components/common/atoms/PageTitle/Index'
import { useState } from "react";
import ListSports from "../../../components/specificPerPage/game/find/template/ListSports/Index";
import ModalSelectCategorys from "../../../components/common/template/ModalSelectCategorys/Index";
import { DataForGameResearchProps } from "../../../Types/DataForGameResearchProps";
import ContentPage from "../../../styles/globals/ContentPage";
import { StyleFindGame } from "../../../styles/Pages/StyledFindGame";
import { useSearchParams } from 'next/navigation'
import { Routes } from '../../../Routes';

const Find = () => {
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
        const redirectUrl = `${Routes.gameList}?${category ? `category=${category}&` : ""}${categoryGenre ? `categoryGenre=${categoryGenre}&` : ""}${sportSelected ? `sportSelected=${sportSelected}` : ""}`

        window.location.href = redirectUrl
    }

    return (
        <>
            <PageTitle title={`Encontrar jogo`} />

            <ContentPage>
                <StyleFindGame className="box-page">
                    <div className="decoration" />

                    <div className="container">
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
            </ContentPage>
        </>
    )
}

export default Find