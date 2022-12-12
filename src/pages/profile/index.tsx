import PageTitle from '../../components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../../styles/CustomBackground'
import { StyledProfile } from '../../styles/Pages/StyledProfile'
import { ViewProfile } from '../../components/templates/ViewProfile/Index'
import ModifyUserData from '../../components/templates/ModifyUserData/Index'


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