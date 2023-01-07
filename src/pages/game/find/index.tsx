import { useSearchParams } from 'next/navigation'
import { useState } from "react";

import ContentPage from "../../../styles/globals/ContentPage";

import { Routes } from '../../../Routes';

import ListSports from "../../../components/specificPerPage/game/find/template/ListSports/Index";
import ModalSelectCategorys from "../../../components/common/template/ModalSelectCategorys/Index";
import Title from '../../../components/specificPerPage/game/find/molecules/Title/Index';

import { DataForGameResearchProps } from "../../../Types/DataForGameResearchProps";

import { StyledFindGame } from "../../../styles/Pages/StyledFindGame";
import { usePageTitleContext } from '../../_app';

const Find = () => {

    const { usePageTitle } = usePageTitleContext()
    usePageTitle.setPageTitle('Pesquisar por Jogo')

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
        <ContentPage>
            <StyledFindGame className="box-page">
                <div className="decoration" />

                <div className="container">
                    <Title title={course ? course : "nenhum curso selecionado"} />
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
            </StyledFindGame>
        </ContentPage>
    )
}

export default Find