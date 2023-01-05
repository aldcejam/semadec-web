import PageTitle from '../../components/common/atoms/PageTitle/Index'
import ContentPage from '../../styles/globals/ContentPage'
import { StyledRanking } from '../../styles/Pages/StyledRanking'


const Profile = () => {
    return (
        <>
            <PageTitle title={"Cadastrar "}
            />

            <ContentPage>
                <StyledRanking className='box-page'>
                    
                </StyledRanking>
            </ContentPage>
        </>
    )
}

export default Profile