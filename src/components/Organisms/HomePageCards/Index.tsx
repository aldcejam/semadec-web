import Link from "next/link"
import CardTitle from "../../Molecules/HomePageCards/CardTitle/Index"
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
        <Link href={link}>
            <StyledHomePageCard className="card">
                {illustration}
                <CardTitle
                    title={title}
                />
            </StyledHomePageCard>
        </Link>
    )
}

export default HomePageCard