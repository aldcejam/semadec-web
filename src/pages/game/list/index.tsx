import { useSearchParams } from 'next/navigation'
import ContentPage from '../../../styles/globals/ContentPage'
import GameList from '../../../components/specificPerPage/game/list/template/GameList/Index'
import { StyledGames } from '../../../styles/Pages/StyledGames'
import { usePageTitleContext } from '../../_app'


const List = () => {

    const searchParams = useSearchParams()
    const sportSelected = searchParams.get('sportSelected')
    const categoryGenre = searchParams.get('categoryGenre')
    const category = searchParams.get('category')


    const { usePageTitle } = usePageTitleContext()
    usePageTitle.setPageTitle(`${`${sportSelected ? sportSelected : "esporte não definido"}
        ${category ? ` - ${category}` : ""}
        `}`)

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
        <ContentPage>
            <StyledGames className="box-page">
                <div className="decoration" />

                <div className="content">
                    <h2>{categoryGenre}</h2>
                    {ListWeekday.map((day) => (
                        <GameList key={day} day={day} />
                    ))}
                </div>
            </StyledGames>
        </ContentPage>
    )
}

export default List