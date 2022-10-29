import { GameProps } from "../../../Types/GameList/TypesTeams"

type typegames = GameProps[] &{}
export const games:typegames = [
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