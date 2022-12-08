import { ThemeProvider as ThemeProviderMaterialUI } from '@mui/material'
import { DarkTheme, LightTheme } from '../themes'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}
interface IThemeContext {
    themeName: 'light' | 'dark'
    themeModifier: (theme: any) => void
    mainColor: string,
    secondaryColor: string
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark')
    const [mainColor, SetMainColor] = useState<string>('#5B6ABD')
    const [secondaryColor, setSecondaryColor] = useState<string>('#D943B8')
    /* #5B6ABD */
    /* #2e84c1 */
    /* #e25252 */

    const themeModifier = (theme: any) => {
        setThemeName(theme)
    }

    const theme = useMemo(() => {
        if (themeName === 'light') {
            return LightTheme(mainColor, secondaryColor)
        }else{
            return DarkTheme(mainColor, secondaryColor)
        }

    }, [themeName, mainColor])

    useEffect(() => {
        const isThemeExist = localStorage.getItem('@ThemeSemadec')
        const defaultTheme = isThemeExist ? isThemeExist : 'light';
        themeModifier(defaultTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ themeName, themeModifier, mainColor,secondaryColor }}>
            <ThemeProviderMaterialUI theme={theme}>
                {children}
            </ThemeProviderMaterialUI>
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

