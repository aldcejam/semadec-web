import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { UseSuapUserData } from "./UseSuapUserData"

export const UseMainUserData = () => {

    const { data: session, status } = useSession()
    const { situationLoginSuap, resource } = UseSuapUserData()


    type UseMainUserDataProps = {
        name: string | undefined | null
        email: string | undefined | null
    }

    const [mainUserData, setMainUserData] = useState<UseMainUserDataProps>({} as UseMainUserDataProps)

    useEffect(() => {
        if (session !== null && status === "authenticated") {
            setMainUserData({
                name: session.user?.name,
                email: session.user?.email
            })
        }
        else if (situationLoginSuap) {
            setMainUserData({
                name: resource?.nome,
                email: resource?.email,
            })

        }

    }, [status])
    return (
        mainUserData
    )

}