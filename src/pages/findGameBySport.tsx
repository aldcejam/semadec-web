import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import AngleLine from "../../public/format/AngleLine";
import PageTitle from "../components/Atoms/PageTitle/Index";
import ListSports from "../components/templates/ListSports/Index";
import { ContainerContentPage } from "../styles/global/globals";
import {StyledFindGameBySport } from "../styles/Styed.FindGameBySport";

const FindGameBySport: NextPage = () => {
    const { query } = useRouter();

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
                        <ListSports course={query.curso}/>
                    </div>
                </StyledFindGameBySport>
            </ContainerContentPage>
        </>
    )
}

export default FindGameBySport