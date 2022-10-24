
import { lazy } from 'react'
import HomePageCard from "../../Organisms/HomePageCards/Index"
import { StyledHomePageCards } from "./Styled"


const IllustrationCourse = lazy(() => import("../../../../public/illustrationsForCard/IllustrationCourse/IllustrationCourse"))
const IllustrationEdicoesDaSemadec = lazy(() => import("../../../../public/illustrationsForCard/IllustrationEdicoesDaSemadec/IllustrationEdicoesDaSemadec"))
const IllustrationJogosDoSeuCurso = lazy(() => import("../../../../public/illustrationsForCard/IllustrationJogosDoSeuCurso/IllustrationJogosDoSeuCurso"))
const IllustrationJogosEsportivos = lazy(() => import("../../../../public/illustrationsForCard/IllustrationJogosEsportivos/IllustrationJogosEsportivos"))
const IllustrationPublicacoesSobreSemadec = lazy(() => import("../../../../public/illustrationsForCard/IllustrationPublicacoesSobreSemadec/IllustrationPublicacoesSobreSemadec"))
const IllustrationRecordesDestaEdicao = lazy(() => import("../../../../public/illustrationsForCard/IllustrationRecordesDeTodosOsAnos/IllustrationRecordesDeTodosOsAnos"))

const HomePageCards = () => {
    return (
        <StyledHomePageCards>
            <div className="grid-top">
                <HomePageCard link='/' title='equipes por curso' illustration={<IllustrationCourse />} />
                <HomePageCard link='/' title='jogos esportivos' illustration={<IllustrationJogosEsportivos />} />
                <HomePageCard link='/findGameBySport?curso=informatica' title='jogos do seu curso' illustration={<IllustrationJogosDoSeuCurso />} />
            </div>
            <div className="grid-left">
                <HomePageCard link='/' title='recordes desta edição' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='publicações sobre a semadec' illustration={<IllustrationPublicacoesSobreSemadec />} />
            </div>
            <div className="grid-right">
                <HomePageCard link='/' title='recordes de todos os anos' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='Edições da semadec' illustration={<IllustrationEdicoesDaSemadec />} />
            </div>
        </StyledHomePageCards>
    )
}

export default HomePageCards