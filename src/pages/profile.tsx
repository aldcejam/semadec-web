import type { NextPage } from 'next'
import Head from 'next/head'
import PageTitle from '../components/Atoms/PageTitle/Index'
import ModifyUserData from '../components/templates/ModifyUserData/Index'
import { ViewProfile } from '../components/templates/ViewProfile/Index'
import { ContainerContentPage } from '../styles/global/globals'
import StyledProfile from '../styles/Styled.Profile'

const Profile: NextPage = () => {

  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <PageTitle title={`Perfil`} />

      <ContainerContentPage with_background_color='false'>
        <StyledProfile>
          <ViewProfile screen='profileUser'/>
          <ModifyUserData/>
        </StyledProfile>
      </ContainerContentPage>
    </>
  )
}

export default Profile
