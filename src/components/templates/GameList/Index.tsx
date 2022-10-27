import WeekDay from "../../Atoms/GameList/WeekDay/Index"
import GameListByWeekDay from "../../Organisms/GameList/GameListByWeekDay/Index"
import { StyledGameList } from "./Styled"

type GameListProps = {
    day: string
}
const GameList = ({ day }: GameListProps) => {

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
                date: new Date(2022, 9, 1),
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
                date: new Date(2022, 16, 2),
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
                date: new Date(2022, 9, 3),
                situation: "andamento"
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
                date: new Date(2022, 9, 4),
                situation: "andamento"
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
                date: new Date(2022, 9, 5),
                situation: "andamento"
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
                date: new Date(2022, 9, 6),
                situation: "andamento"
            }
        },
    ]

    const gamesDates = games.map((game) => {
        return (
            game.specification.date.toDateString().split(" ")[0]
        )
    })
    const gamesDatesWithoutRepeat = [...new Set(gamesDates)]

    return (
        <>
            {
                gamesDatesWithoutRepeat.map((date) => {
                    return (
                        date.split(" ")[0] == day ?
                            <span key={date}>
                                <WeekDay date={date} />
                                <GameListByWeekDay day={day} games={games} />
                            </span>
                            : null

                    )
                })
            }
        </>
    )
}



export default GameList
