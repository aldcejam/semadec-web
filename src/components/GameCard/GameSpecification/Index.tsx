import { StyledGameSpecification } from "./Styled"
import { TeamsProps } from "../TypesTeams"


const GameSpecification = ({ game }: TeamsProps) => {
    const day = `
        ${(game.specification.date).getUTCDate()} /
        ${(game.specification.date).getMonth()} /
        ${(game.specification.date).getFullYear()}
    `


    return (
        <StyledGameSpecification>
            <div className="teams-competing">
                {game.placar.map((team, index, array) => {
                    return (
                        <div key={team.course} className="teams-competing__confront">
                            <p className="confront--team">
                                {team.course}
                            </p>
                            {
                                index ==  array.length - 1 ?
                                "":
                                <div className="confront--icon-versus"/>
                            }
                        </div>
                    )
                })}
            </div>
            <div className="game-situation">
                <div className={`circle`} />
                <p>{game.specification.situation}</p>
            </div>
            <div className="game-date">
                <time dateTime={game.specification.date.toString()}>{day}</time>
            </div>
        </StyledGameSpecification>
    )
}

export default GameSpecification