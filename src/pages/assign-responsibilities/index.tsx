import PageTitle from "../../components/common/atoms/PageTitle/Index"
import ContentPage from "../../styles/globals/ContentPage"
import { StyledAssignResponsibilities } from "../../styles/Pages/StyledAssignResponsibilities"
import { usePageTitleContext } from "../_app"

const AssignResponsibilities = () => {

    const { usePageTitle } = usePageTitleContext()
    usePageTitle.setPageTitle('Atribuir Responsabilidade')

    return (
        <ContentPage>
            <StyledAssignResponsibilities className="box-page">
                <div className="decoration" />

            </StyledAssignResponsibilities>
        </ContentPage>
    )
}

export default AssignResponsibilities