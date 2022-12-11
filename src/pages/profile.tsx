import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../styles/CustomBackground'
import { StyledProfile } from '../styles/Pages/StyledProfile'
import { ViewProfile } from '../../src/components/templates/ViewProfile/Index'
import ModifyUserData from '../../src/components/templates/ModifyUserData/Index'


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