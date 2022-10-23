import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
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

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataForSearchBySportCategories, setDataForSearchBySportCategories] = useState<dataForSearchBySportCategoriesProps>({
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: []
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: ""
    });
    const ToggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
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
                            dataForSearchBySportCategories={dataForSearchBySportCategories}
                            setDataForSearchBySportCategories={setDataForSearchBySportCategories}
                        />
                    </div>
                </StyledFindGameBySport>
            </ContainerContentPage>
        </>
    )
}

export default FindGameBySport