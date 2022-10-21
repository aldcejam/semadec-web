import type { AppProps } from 'next/app'

import '../styles/global/globals.css'
import { ContainerGlobal } from '../styles/global/globals';
import { ContainerPage } from '../styles/global/globals';

import { ThemeContextProvider } from '../contexts/ThemeContext'

import SideBarPage from '../components/templates/Sidebar/Index';
import DefaultBackground from '../../public/Default-background.tsx/Index';
import SettingsButtons from '../components/Molecules/SettingsButtons/Index';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ThemeContextProvider>
      {/*  */}
      <DefaultBackground />
      <ContainerGlobal>
        <SideBarPage />
        <SettingsButtons />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      </ContainerGlobal>
      {/*  */}
      <ContainerPage>
        <Component {...pageProps} />
      </ContainerPage>

    </ThemeContextProvider>
  )
}



export default MyApp
