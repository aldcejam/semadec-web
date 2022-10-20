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
            case "famale":
                return <IllustrationFamale />
            case "male":
                return <IllustrationMale />
            case "mixed":
                return <IllustrationMixed />
        }

    }
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
        <StyledButtonSelectGenre className={`${selected ? "selected":""}`}>
            <div className="illustration">
                {ShowCategoryGenre(genre)}
            </div>
            <p>{tranlateCategoryGenre(genre)}</p>
        </StyledButtonSelectGenre>
    )
}
export default ButtonSelectGenre