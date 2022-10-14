import { StyledPageTitle } from "./Styled";

type TypesPageTitle = {
    title: string
}

const PageTitle = ({title}:TypesPageTitle)=>{
    return(
        <StyledPageTitle>
            {title}
        </StyledPageTitle>
    )
}

export default PageTitle;