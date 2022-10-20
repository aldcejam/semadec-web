import ButtonSelectGenre from "../../../../Molecules/ListSports/ModalSelectCategorys/ButtonSelectGenre/Index"
import { dataForResearchProps } from "../../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearch"
import { StyledGenreOptions } from "./Styled"

type GenreOptionsProps = {
    selectCategoryGenre: (categoryGenre: string) => void,
    categoryGenre: string[]
    dataForResearch: dataForResearchProps
}
const GenreOptions = ({ categoryGenre, selectCategoryGenre, dataForResearch }: GenreOptionsProps) => {


    return (
        <StyledGenreOptions >
            {categoryGenre.map((genre) => {
                return (
                    <span
                        onClick={() =>{
                            console.log(genre + "&&" +dataForResearch.userSelectedCategoryGenre)
                            selectCategoryGenre(genre)
                        }}
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