import ButtonSelectGenre from "../../../Molecules/ListSports/ButtonSelectGenre/Index"
import { StyledGenreOptions } from "./Styled"

type GenreOptionsProps = {
    selectCategoryGenre: (categoryGenre: string) => void,
    categoryGenre: string[]
}
const GenreOptions = ({ categoryGenre, selectCategoryGenre }: GenreOptionsProps) => {

    const tranlateCategoryGenre = (categoryGenre: string) => {
        switch (categoryGenre) {
            case "male":
                return "Masculino"
            case "famale":
                return "Feminino"
            case "mixed":
                return "Misto"
            default: return ""
        }
    }

    return (
        <StyledGenreOptions>
            {categoryGenre.map((genre) => {
                return (
                    <span onClick={() => 
                        selectCategoryGenre(tranlateCategoryGenre(genre))}
                        key={genre}>
                        <ButtonSelectGenre
                            genre={tranlateCategoryGenre(genre)} />
                    </span>
                )
            })}
        </StyledGenreOptions>
    )
}

export default GenreOptions