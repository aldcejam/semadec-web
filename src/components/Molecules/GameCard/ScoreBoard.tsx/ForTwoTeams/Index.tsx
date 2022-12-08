import Image from "next/image"
import { StyleForTwoTeams } from "./Style.ForTwoTeams"
import { PlacarGameProps } from "../../../../../Types/GameList/TypesTeams"
import IconVersus from "../../../../Atoms/IconVersus/Index"

const ForTwoTeams = ({ placar }: PlacarGameProps) => {

    const applyIconVersus = (currentTeam: number) => {
        const firstTeam = 0
        if (currentTeam == firstTeam) {
            return (
                <div className="icon-versus">
                    <IconVersus />
                </div>
            )

        }else{
            return null
        }
    }

    return (
        <StyleForTwoTeams>
            {
                placar.map((team, index) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} layout="fill" />
                            </div>
                            <div className="team__score">
                                {team.score}
                            </div>
                            {applyIconVersus(index)}
                        </div>
                    )
                })
            }
        </StyleForTwoTeams>
    )
}

export default ForTwoTeams