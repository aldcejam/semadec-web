import { lazy, Suspense } from 'react';
import IllustrationCourse from "../../../../public/illustrationsForCard/IllustrationCourse/IllustrationCourse"
import IllustrationEdicoesDaSemadec from "../../../../public/illustrationsForCard/IllustrationEdicoesDaSemadec/IllustrationEdicoesDaSemadec"
import IllustrationJogosDoSeuCurso from "../../../../public/illustrationsForCard/IllustrationJogosDoSeuCurso/IllustrationJogosDoSeuCurso"
import IllustrationJogosEsportivos from "../../../../public/illustrationsForCard/IllustrationJogosEsportivos/IllustrationJogosEsportivos"
import IllustrationPublicacoesSobreSemadec from "../../../../public/illustrationsForCard/IllustrationPublicacoesSobreSemadec/IllustrationPublicacoesSobreSemadec"
import IllustrationRecordesDestaEdicao from "../../../../public/illustrationsForCard/IllustrationRecordesDeTodosOsAnos/IllustrationRecordesDeTodosOsAnos"
import { StyledHomePageCards } from "./Styled"

const HomePageCard = lazy(() => import("../../Organisms/HomePageCards/Index"))

const HomePageCards = () => {
    return (
        <StyledHomePageCards>
            <div className="grid-top">
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='equipes por curso' illustration={<IllustrationCourse />} />
                </Suspense>
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='jogos esportivos' illustration={<IllustrationJogosEsportivos />} />
                </Suspense>
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/findGameBySport?curso=informatica' title='jogos do seu curso' illustration={<IllustrationJogosDoSeuCurso />} />
                </Suspense>
            </div>
            <div className="grid-left">
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='recordes desta edição' illustration={<IllustrationRecordesDestaEdicao />} />
                </Suspense>
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='publicações sobre a semadec' illustration={<IllustrationPublicacoesSobreSemadec />} />
                </Suspense>
            </div>
            <div className="grid-right">
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='recordes de todos os anos' illustration={<IllustrationRecordesDestaEdicao />} />
                </Suspense>
                <Suspense fallback={<div>Carregando...</div>}>
                    <HomePageCard link='/' title='Edições da semadec' illustration={<IllustrationEdicoesDaSemadec />} />
                </Suspense>
            </div>
        </StyledHomePageCards>
    )
}

export default HomePageCards