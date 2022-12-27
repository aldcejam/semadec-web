import PageTitle from '../../components/common/atoms/PageTitle/Index'
import ContentPage from '../../styles/globals/ContentPage'
import { StyledProfile } from '../../styles/Pages/StyledProfile'
import { ViewProfile } from '../../components/common/template/ViewProfile/Index'
import ModifyUserData from '../../components/specificPerPage/profile/template/ModifyUserData/Index'


const Profile = () => {
    return (
        <>
            <PageTitle title={"Perfil"}
            />

            <ContentPage>
                <StyledProfile>
                    <ViewProfile screen='profileUser' />
                    <ModifyUserData />
                </StyledProfile>
            </ContentPage>
        </>
    )
}

export default Profile