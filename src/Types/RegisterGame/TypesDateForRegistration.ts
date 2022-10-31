export type TeamsProps = {
    teamName: string,
    teamLogo: string
}

export type DateForRegistrationProps = {
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
    gameSituation: string,
    gameDate: Date,
    scoreForFirst: number,
    scoreForSecond: number,
    scoreForThird: number,
}