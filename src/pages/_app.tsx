import type { AppProps } from 'next/app'

import '../styles/global/globals.css'
import { ContainerGlobal } from '../styles/global/globals';
import { ContainerPage } from '../styles/global/globals';

import { ThemeContextProvider } from '../contexts/ThemeContext'

import SideBarPage from '../components/templates/Sidebar/Index';
import DefaultBackground from '../../public/Default-background.tsx/Index';
import SettingsButtons from '../components/Molecules/SettingsButtons/Index';


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ThemeContextProvider>
      {/*  */}
      <ContainerGlobal>
        <SideBarPage />
        <SettingsButtons />
      </ContainerGlobal>
      {/*  */}
      <ContainerPage>
        <Component {...pageProps} />
      </ContainerPage>

    </ThemeContextProvider>
  )
}



export default MyApp
