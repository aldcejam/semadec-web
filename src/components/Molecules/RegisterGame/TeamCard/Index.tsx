import Image from "next/image";
import { useState } from "react";
import { StyledTeamCard } from "./Styled"

type TeamCardProps = {
    teamName: string;
    teamLogo: string;
    cardSelected: string[];
}
const TeamCard = ({ teamLogo, teamName, cardSelected }: TeamCardProps) => {
    const ola = cardSelected? cardSelected.filter(team => team === "selected"):null
    return (
        <StyledTeamCard>
            <div className={`container-logo ${ola}`}>
                <div className="logo">
                    <Image src={teamLogo} layout="fill" />
                </div>
            </div>
            <p>{teamName}</p>
        </StyledTeamCard>
    )
}

export default TeamCard