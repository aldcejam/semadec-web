import WeekDay from "../../Atoms/GameList/WeekDay/Index"
import GameListByWeekDay from "../../Organisms/GameList/GameListByWeekDay/Index"
import {games} from "../../../use/FetchGames/fetchGames"

type GameListProps = {
    day: string
}
const GameList = ({ day }: GameListProps) => {
    
    const gamesDates = games.map((game) => {
        return (
            game.specification.date.toDateString().split(" ")[0]
        )
    })

    //remove dates repeat
    const gamesDatesWithoutRepeat = gamesDates.filter((date, index) => {
        return gamesDates.indexOf(date) === index
    })

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
