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
import PageTitle from '../components/common/atoms/PageTitle/Index';
import { useState, useMemo, createContext, useContext } from 'react';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

type PageTitleContextProps = {
  usePageTitle: {
    pageTitle: string;
    setPageTitle: any
  }
}
const PageTitleContext = createContext<PageTitleContextProps>({} as PageTitleContextProps);
export const usePageTitleContext = () => useContext(PageTitleContext);

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) =>{

  const Page = usePathname()

  const [pageTitle, setPageTitle] = useState<string>('')
  
  const usePageTitle = useMemo(() => ({
    pageTitle, setPageTitle
  }), [pageTitle]);

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
              <PageTitleContext.Provider value={{ usePageTitle }}>
                  <SidebarStateProvider>
                    <ContainerGlobal className={rajdhani.className}  >
                      <Sidebar />
                      <ContainerPage>
                        <header className='header-page'>
                          <PageTitle title={`${usePageTitle? usePageTitle.pageTitle: ""}`} />
                          <SettingsButtons />
                        </header>
                        <Component {...pageProps} />
                      </ContainerPage>
                    </ContainerGlobal>
                  </SidebarStateProvider>
              </PageTitleContext.Provider>
            </>
        }
      </ThemeContextProvider >
    </SessionProvider>
  )
}

export default App