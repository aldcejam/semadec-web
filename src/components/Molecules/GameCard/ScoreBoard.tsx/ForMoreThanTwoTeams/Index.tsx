import Image from "next/image"
import IconVersus from "../../../../Atoms/IconVersus/Index"
import { ScoreboardGameProps } from "../../../../../use/FetchGames/GameProps"
import { StyleForMoreThanTwoTeams } from "./Style.ForMoreThanTwoTeams"



const ForMoreThanTwoTeams = ({ placar }: ScoreboardGameProps) => {

    const applyIconVersus = (currentTeam: number, lastTeamWithoutIcon: number) => {
        if (currentTeam < lastTeamWithoutIcon) {
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
        <StyleForMoreThanTwoTeams>
            {
                placar.map((team, index, arrayPlacar) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} layout="fill" />
                            </div>
                            {applyIconVersus(index, arrayPlacar.length -1 )}
                        </div>
                    )
                })
            }
        </StyleForMoreThanTwoTeams >
    )
}
export default ForMoreThanTwoTeams