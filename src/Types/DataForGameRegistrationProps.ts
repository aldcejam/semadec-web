export type TeamsProps = {
    teamName: string,
    teamLogo: string
}
export type PontuationsGameProps = {
    position: number, 
    score: number
}
export type gameSituationProps = {
    gameSituation: "em andamento" | "pre-cadastrado",
}

export type DataForGameRegistrationProps = gameSituationProps & {
    teams: Array<TeamsProps>,
    sport: {
        sportName: string;
        categorys: string[] | undefined;
        categoryGenre: string[] ;
        MinNumberOfTeams: number;
        MaxNumberOfTeams: number;
    },
    userSelectedCategory: string,
    userSelectedCategoryGenre: string,
    gameDate: Date,
    pontuationsGame: Array<PontuationsGameProps>,
}