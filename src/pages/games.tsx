import Head from "next/head";
import GameCard from "../components/GameCard/Index";
import PageTitle from "../components/Atoms/PageTitle/Index";
import { ContainerContentPage } from "../styles/global/globals";
import { StyledGame } from "../styles/Styled.Game";
import { useRouter } from "next/router";


const Game = () => {

    const router = useRouter()
    const { sportSelected, categoryGenre, category } = router.query
    const sport = sportSelected as string

    const date1 = new Date(2022, 9, 12)
    const date2 = new Date(2022, 9, 23)
    const date3 = new Date(2022, 9, 29)

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
                date: date1,
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
                date: date2,
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
                date: date3,
                situation: "andamento"
            }
        },
    ]
    const translateWeekDays = (day: string) => {
        switch (day) {
            case "Sun":
                return "Domingo";
            case "Mon":
                return "Segunda";
            case "Tue":
                return "Terça";
            case "Wed":
                return "Quarta";
            case "Thu":
                return "Quinta";
            case "Fri":
                return "Sexta";
            case "Sat":
                return "Sábado";
        }
    }
    const weekday = [
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
                    <div className="style-background">
                        <div />
                    </div>
                    <div className="container">
                        <h2>{categoryGenre}</h2>
                        {weekday.map((day) => (
                            games.map((game) => {
                                return (
                                    game.specification.date.toDateString().split(" ")[0] == day ?
                                        <div className="container__weekday">
                                            <div className="weekday__title">
                                                <h3>{translateWeekDays(game.specification.date.toDateString().split(" ")[0])}</h3>
                                            </div>
                                            <div className="segunda__cards cards">
                                                {games.map((game, index) => {
                                                    return (
                                                        game.specification.date.toDateString().split(" ")[0] == day ?
                                                        <GameCard key={index} game={game} />: null
                                                    )
                                                })}
                                            </div>

                                        </div>
                                        : null

                                )
                            })

                        ))}
                    </div>
                </StyledGame>
            </ContainerContentPage>
        </>
    )
}



export default Game