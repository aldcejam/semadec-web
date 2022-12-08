import Image from "next/image";
import { StyledTeamCard } from "./Styled"

type TeamCardProps = {
    teamName: string;
    teamLogo: string;
    cardSelected: string[];
}
const TeamCard = ({ teamLogo, teamName, cardSelected }: TeamCardProps) => {
    const styleClass = cardSelected? cardSelected.filter(team => team === "selected"):null
    return (
        <StyledTeamCard>
            <div className={`container-logo ${styleClass}`}>
                <div className="logo">
                    <Image alt="logo de curso" src={teamLogo} layout="fill" />
                </div>
            </div>
            <p>{teamName}</p>
        </StyledTeamCard>
    )
}

export default TeamCard