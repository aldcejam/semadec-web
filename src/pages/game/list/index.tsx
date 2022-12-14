import { useSearchParams } from 'next/navigation'
import PageTitle from '../../../components/common/atoms/PageTitle/Index'
import { ContainerContentPage } from '../../../styles/CustomBackground'
import { StyledGames } from '../../../styles/Pages/StyledGames'
import GameList from '../../../components/specificPerPage/game/list/template/GameList/Index'


const List = () => {
    const searchParams = useSearchParams()
    const sportSelected = searchParams.get('sportSelected')
    const categoryGenre = searchParams.get('categoryGenre')
    const category = searchParams.get('category')

    const ListWeekday = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ]

    return (
        <>
            <PageTitle title={
                `${sportSelected ? sportSelected : "esporte não definido"}
                ${category ? ` - ${category}` : ""}
                `}
            />

            <ContainerContentPage>
                <StyledGames className="box-page">
                    <div className="decoration" />

                    <div className="content">
                        <h2>{categoryGenre}</h2>
                        {ListWeekday.map((day) => (
                            <GameList key={day} day={day} />
                        ))}
                    </div>
                </StyledGames>
            </ContainerContentPage>
        </>
    )
}

export default List