export type DataForGameResearchProps = {
  sport: {
    sportName: string;
    categorys: string[] | undefined;
    categoryGenre: string[] ;
  };
  userSelectedCategory: string;
  userSelectedCategoryGenre: string;
};