import CurverBorderButton from "../../../../public/format/Curver-border-button"
import GameSpecification from "../../Molecules/GameCard/GameSpecification/Index"
import TeamVersus from "../../Organisms/GameCard/TeamVersus/Index"
import { StyledGameCard } from "./Styled"
import { GameProps } from "../../../use/FetchGames/GameProps"

type GameCardProps = {
    game: GameProps
}
const GameCard = ({ game }: GameCardProps) => {


    return (
        <StyledGameCard>
            <CurverBorderButton />
            <div className="game-score">
                <TeamVersus placar={game.placar}/>
                <GameSpecification game={game}/>
            </div>
        </StyledGameCard>
    )
}
export default GameCard