import { GetStaticPaths } from "next"
import { games } from "../../../use/FetchGames/fetchGames"

export const getStaticPaths: GetStaticPaths  = async ({params}) => {    
    const paths = games.map((game) => {
        return {
            params: { 
                id: `${game.id}` }
        }
    })
    return{
        paths, fallback: false
    }
}

const Game = ({ game }: any) => {
    const { id } = game
    return(
        <>
        <h1>{id}</h1>
        </>
    )
}

export default Game