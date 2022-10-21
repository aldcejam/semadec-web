import ButtonSelectGenre from "../../../../Molecules/ListSports/ModalSelectCategorys/ButtonSelectGenre/Index"
import { dataForResearchGameProps } from "../../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearchGame"
import { StyledGenreOptions } from "./Styled"

type GenreOptionsProps = {
    selectCategoryGenre: (categoryGenre: string) => void,
    categoryGenre: string[]
    dataForResearch: dataForResearchGameProps
}
const GenreOptions = ({ categoryGenre, selectCategoryGenre, dataForResearch }: GenreOptionsProps) => {


    return (
        <StyledGenreOptions >
            {categoryGenre.map((genre) => {
                return (
                    <span
                        onClick={() => selectCategoryGenre(genre)}
                        key={genre}>
                        <ButtonSelectGenre
                            selected={dataForResearch.userSelectedCategoryGenre == genre ? true : false}
                            genre={genre} />
                    </span>
                )
            })}
        </StyledGenreOptions>
    )
}

export default GenreOptions