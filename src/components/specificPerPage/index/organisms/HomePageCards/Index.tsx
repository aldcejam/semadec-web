import Link from "next/link"
import CardTitle from "../../molecules/HomePageCards/CardTitle/Index"
import { StyledHomePageCard } from "./Styled"

type TypesHomePageCard = {
    illustration: any
    title: "equipes por curso" | "jogos esportivos" |
    "jogos do seu curso" | "recordes desta edição" | "recordes de todos os anos" |
    "publicações sobre a semadec" | "Edições da semadec"
    link: string
}

const HomePageCard = ({ illustration, title, link }: TypesHomePageCard) => {
    return (
        <StyledHomePageCard className="card">
            <Link href={link}>
                <span className="illustration">
                    {illustration}
                </span>
                <CardTitle
                    title={title}
                />
            </Link>
        </StyledHomePageCard>
    )
}

export default HomePageCard