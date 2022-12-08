import ButtonSelectGenre from "../../../Molecules/ListSports/ModalSelectCategorys/ButtonSelectGenre/Index"
import { DataForGameResearchProps } from "../../../../Types/DataForGameResearchProps"
import { StyledGenreOptions } from "./Styled"

type GenreOptionsProps = {
    selectCategoryGenre: (categoryGenre: string) => void,
    categoryGenre: string[]
    dataForSearchBySportCategories: DataForGameResearchProps
}
const GenreOptions = ({ categoryGenre, selectCategoryGenre, dataForSearchBySportCategories }: GenreOptionsProps) => {
    const tranlateCategoryGenre = (categoryGenre: string) => {
        switch (categoryGenre) {
            case "male":
                return "masculino"
            case "famale":
                return "feminino"
            case "mixed":
                return "misto"
            default: return ""
        }
    }
    return (
        <StyledGenreOptions >
            {categoryGenre.map((genre) => {
                return (
                    <span
                        onClick={() => selectCategoryGenre(tranlateCategoryGenre(genre))}
                        key={genre}>
                        <ButtonSelectGenre
                            selected={dataForSearchBySportCategories.userSelectedCategoryGenre == tranlateCategoryGenre(genre) ? true : false}
                            genre={tranlateCategoryGenre(genre)} />
                    </span>
                )
            })}
        </StyledGenreOptions>
    )
}

export default GenreOptions