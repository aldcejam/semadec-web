export type DateForRegistrationProps = {
    teams: string[],
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