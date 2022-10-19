import IllustrationFamale from '../../../../../public/Illustration-genre/Famele';
import IllustrationMale from '../../../../../public/Illustration-genre/Male';
import IllustrationMixed from '../../../../../public/Illustration-genre/Mixed';
import { StyledButtonSelectGenre } from './Styled';



type ButtonSelectGenreProps = {
    genre: string
}
const ButtonSelectGenre = ({ genre }: ButtonSelectGenreProps) => {
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

    return (
        <StyledButtonSelectGenre>
            <div className="illustration">
                {ShowCategoryGenre(genre)}
            </div>
            <p>{genre}</p>
        </StyledButtonSelectGenre>
    )
}
export default ButtonSelectGenre