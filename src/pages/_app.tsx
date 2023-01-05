import '../styles/globals.css'
import DefaultBackground from '../../public/Default-background'
import { ContainerGlobal } from "../styles/globals/ContainerGlobal"
import { ContainerPage } from '../styles/globals/ContainerPage';

import type { AppProps } from 'next/app'

import { usePathname } from 'next/navigation'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { SessionProvider } from "next-auth/react"

import Sidebar from '../components/common/template/Sidebar/Index';
import SettingsButtons from '../components/common/molecules/SettingsButtons/Index';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Rajdhani } from '@next/font/google';
import { SidebarStateProvider } from '../contexts/SidebarStateContext';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps:{session , ...pageProps} }: AppProps) {
  const Page = usePathname()

  return (
    <SessionProvider session={session}>

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
              <SidebarStateProvider>
                <ContainerGlobal className={rajdhani.className}  >
                  <Sidebar />
                  <SettingsButtons />
                  <ContainerPage className="olaaaa">
                    <Component {...pageProps} />
                  </ContainerPage>
                </ContainerGlobal>
              </SidebarStateProvider>
            </>
        }
      </ThemeContextProvider >
    </SessionProvider>
  )
}
