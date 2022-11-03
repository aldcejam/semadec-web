import Image from "next/image"
import { StyledLogoTeams } from "./Styled"

type LogoTeamsProps = {
    teams: Array<{ teamName: string, teamLogo: string }>
}

const LogoTeams = ({ teams }: LogoTeamsProps) => {
    return (
        <StyledLogoTeams>
            {teams.map((team, index) => {
                return (
                    team.teamLogo.length > 0 ?
                        <div className="card" key={team.teamName}>
                            <div className="image" >
                                <Image src={team.teamLogo} layout="fill" />
                            </div>
                            <p>{team.teamName}</p>
                        </div>
                        : null

                )
            })
            }
        </StyledLogoTeams>
    )
}

export default LogoTeams