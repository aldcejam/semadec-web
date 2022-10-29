import Head from "next/head";
import PageTitle from "../components/Atoms/PageTitle/Index";
import { ContainerContentPage } from "../styles/global/globals";
import { StyledGame } from "../styles/Styled.Game";
import { useRouter } from "next/router";
import GameList from "../components/templates/GameList/Index";


const Game = () => {

    const router = useRouter()
    const { sportSelected, categoryGenre, category } = router.query
    const sport = sportSelected as string

    const ListWeekday = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ]

    return (
        <>
            <Head>
                <title>Jogos</title>
            </Head>

            <PageTitle title={
                `${sportSelected ? sport : "esporte não definido"}
                ${category ? ` - ${category}` : ""}
                `}
            />
            <ContainerContentPage with_background_color="true">
                <StyledGame className="box-page">
                    <div className="style-background"/>
                    <div className="content">
                        <h2>{categoryGenre}</h2>
                        {ListWeekday.map((day) => (
                            <GameList key={day} day={day}/>
                        ))}
                    </div>
                </StyledGame>
            </ContainerContentPage>
        </>
    )
}



export default Game