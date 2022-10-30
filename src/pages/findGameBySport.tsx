import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import AngleLine from "../../public/format/AngleLine";
import PageTitle from "../components/Atoms/PageTitle/Index";
import ListSports from "../components/templates/ListSports/Index";
import ModalSelectCategorys from "../components/templates/ModalSelectCategorys/Index";
import { dataForSearchBySportCategoriesProps } from "../components/templates/ModalSelectCategorys/TypesDataForResearchGame";
import { ContainerContentPage } from "../styles/global/globals";
import { StyledFindGameBySport } from "../styles/Styed.FindGameBySport";

const FindGameBySport: NextPage = () => {
    const { query } = useRouter();
    const course = query.curso;

    const [dataForSearchBySportCategories, setDataForSearchBySportCategories] = useState<dataForSearchBySportCategoriesProps>({
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
        const redirectUrl = `games?${category ? `category=${category}&` : ""}${categoryGenre ? `categoryGenre=${categoryGenre}&` : ""}${sportSelected ? `sportSelected=${sportSelected}` : ""}`
        
        window.location.href = redirectUrl
    }

    return (
        <>
            <Head>
                <title>Escolher Esporte</title>
            </Head>

            <PageTitle title="Jogos" />

            <ContainerContentPage with_background_color="true">
                <StyledFindGameBySport className="box-page">
                    <div className="container">
                        <AngleLine />
                        <AngleLine />
                        <ListSports
                            ToggleModal={ToggleModal}
                            setDataForSearchBySportCategories={setDataForSearchBySportCategories}
                            course={course} />
                        <ModalSelectCategorys
                            ToggleModal={ToggleModal}
                            modalIsOpen={modalIsOpen}
                            data={dataForSearchBySportCategories}
                            setdata={setDataForSearchBySportCategories}
                            Submit={Submit}
                        />
                    </div>
                </StyledFindGameBySport>
            </ContainerContentPage>
        </>
    )
}

export default FindGameBySport