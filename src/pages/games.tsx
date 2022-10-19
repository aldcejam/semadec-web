import Head from "next/head";
import GameCard from "../components/GameCard/Index";
import PageTitle from "../components/Atoms/PageTitle/Index";
import { ContainerContentPage } from "../styles/global/globals";
import { StyledGame } from "../styles/Styled.Game";
import { useRouter } from "next/router";


const Game = () => {

    const router = useRouter()
    const { sportSelected, categoryGenre } = router.query
    const sport = sportSelected as string

    const date = new Date(2020,10,11)

    const games = [
        {
            placar: [
                {
                    course: "eletro",
                    logo: "/testes/time1.png",
                    score: 2,
                },
                {
                    course: "adm",
                    logo: "/testes/time3.png",
                    score: 2,
                },
            ],
            specification: {
                date: date,
                situation: "pré-cadastrado"

            }
        },
        {
            placar: [
                {
                    course: "info",
                    logo: "/testes/time3.png",
                    score: 2,
                },
                {
                    course: "eletro",
                    logo: "/testes/time3.png",
                    score: 2,
                },
                {
                    course: "adm",
                    logo: "/testes/time3.png",
                    score: 2,
                },
                {
                    course: "fis",
                    logo: "/testes/time3.png",
                    score: 2,
                },
                {
                    course: "ener",
                    logo: "/testes/time3.png",
                    score: 2,
                },
            ],
            specification: {
                date: date,
                situation: "terminado"
            }
        },
        {
            placar: [
                {
                    course: "info",
                    logo: "/testes/time3.png",
                    score: 2,
                },
                {
                    course: "adm",
                    logo: "/testes/time2.png",
                    score: 2,
                },
            ],
            specification: {
                date: date,
                situation: "andamento"
            }
        },
    ]

    return (
        <>
            <Head>
                <title>Jogos</title>
            </Head>

            <PageTitle title={sportSelected ? sport : "esporte não definido"} />
            <ContainerContentPage with_background_color="true">
                <StyledGame className="box-page">
                    <div className="style-background">
                        <div />
                    </div>
                    <div className="container">
                        <h2>{categoryGenre}</h2>
                        <div className="container__segunda">
                            <h3>Segunda</h3>
                            <div className="segunda__cards cards">
                                {games.map((game, index) => {
                                    return (
                                        <GameCard key={index} game={game} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </StyledGame>
            </ContainerContentPage>
        </>
    )
}



export default Game