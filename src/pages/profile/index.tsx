import PageTitle from '../../components/common/atoms/PageTitle/Index'
import { ContainerContentPage } from '../../styles/CustomBackground'
import { StyledProfile } from '../../styles/Pages/StyledProfile'
import { ViewProfile } from '../../components/common/template/ViewProfile/Index'
import ModifyUserData from '../../components/specificPerPage/profile/template/ModifyUserData/Index'


const Profile = () => {
    return (
        <>
            <PageTitle title={"Perfil"}
            />

            <ContainerContentPage>
                <StyledProfile>
                    <ViewProfile screen='profileUser' />
                    <ModifyUserData />
                </StyledProfile>
            </ContainerContentPage>
        </>
    )
}

export default Profile