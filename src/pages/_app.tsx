import '../styles/globals.css'
import DefaultBackground from '../../public/Default-background'
import { ContainerGlobal, ContainerPage } from '../styles/globals';

import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { ThemeContextProvider } from '../contexts/ThemeContext'


import Sidebar from '../components/templates/Sidebar/Index';
import SettingsButtons from '../components/Molecules/SettingsButtons/Index';

import { ToastContainer } from "react-toastify";
import { Rajdhani } from '@next/font/google';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const Page = usePathname()

  return (
    <ThemeContextProvider>
      <DefaultBackground />
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
      {
        Page == '/login'
          ?
          <span className={rajdhani.className}>
            <Component {...pageProps} />
          </span>
          :
          <>
            <ContainerGlobal className={rajdhani.className}  >
              <Sidebar />
              <SettingsButtons />
            </ContainerGlobal>
            <ContainerPage className={rajdhani.className}>
              <Component {...pageProps} />
            </ContainerPage>
          </>
      }
    </ThemeContextProvider>
  )
}
