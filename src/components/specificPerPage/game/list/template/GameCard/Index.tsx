import CurverBorderButton from "../../../../../../../public/format/Curver-border-button"
import GameSpecification from "../../molecules/GameSpecification/Index"
import TeamVersus from "../../organisms/TeamVersus/Index"
import { StyledGameCard } from "./Styled"
import { GameProps } from "../../../../../../use/FetchGames/GameProps"

type GameCardProps = {
    game: GameProps
}
const GameCard = ({ game }: GameCardProps) => {


    return (
        <StyledGameCard>
            <CurverBorderButton />
            <div className="game-score">
                <span className="team-versus">
                    <TeamVersus placar={game.placar} />
                </span>
                <GameSpecification game={game} />
            </div>
        </StyledGameCard>
    )
}
export default GameCard