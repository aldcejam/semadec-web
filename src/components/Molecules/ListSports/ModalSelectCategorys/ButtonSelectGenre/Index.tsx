import IllustrationFamale from '../../../../../../public/Illustration-genre/Famele';
import IllustrationMale from '../../../../../../public/Illustration-genre/Male';
import IllustrationMixed from '../../../../../../public/Illustration-genre/Mixed';
import { StyledButtonSelectGenre } from './Styled';


type ButtonSelectGenreProps = {
    genre: string
    selected?: boolean
}
const ButtonSelectGenre = ({ genre, selected }: ButtonSelectGenreProps) => {
    const ShowCategoryGenre = (genre: string) => {
        switch (genre) {
            case "feminino":
                return <IllustrationFamale />
            case "masculino":
                return <IllustrationMale />
            case "misto":
                return <IllustrationMixed />
        }

    }
    const tranlateCategoryGenre = (categoryGenre: string) => {
        switch (categoryGenre) {
            case "masculino":
                return "male"
            case "feminino":
                return "famale"
            case "misto":
                return "mixed"
            default: return ""
        }
    }

    return (
        <StyledButtonSelectGenre className={`${selected ? "selected":""}`}>
            <div className="illustration">
                {ShowCategoryGenre(genre)}
            </div>
            <p>{genre}</p>
        </StyledButtonSelectGenre>
    )
}
export default ButtonSelectGenre