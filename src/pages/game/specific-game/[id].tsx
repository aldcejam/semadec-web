import { GetStaticProps } from "next"
import { games } from "../../../use/FetchGames/fetchGames"

export async function getStaticPaths() {

    const paths = games.map((game) => {
        return {
            params: {
                id: game.id.toString()
            }
        }
    })

    return {
        paths: paths
        , fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async (
    context
) => {

    const id = context.params?.id
    /*  const id = params.id */
    return {
        props: {
            pag: id
        }
    }
}



function Game({ pag }:any) {
    return (
        <>
            <h1>{pag}</h1>
        </>
    )
}

export default Game