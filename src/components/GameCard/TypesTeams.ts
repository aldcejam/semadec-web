export type TeamsProps = {
    game: {
        placar: Array<{
            course: string, 
            logo: string,
            score: number,

        }>,
        specification:{
            date: Date,
            situation: string

        }
    }
}