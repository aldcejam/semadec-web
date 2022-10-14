import { StyledCardTitle } from "./Styled"

type CardTitleProps = {
    title: string,
}
const CardTitle = ({title}:CardTitleProps) => {
    return (
        <StyledCardTitle>
            <h2>{title}</h2>
            <h3>clique para entrar</h3>
        </StyledCardTitle>
    )
}



export default CardTitle