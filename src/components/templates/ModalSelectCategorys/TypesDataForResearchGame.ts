export type dataForSearchBySportCategoriesProps = {
  sport: {
    sportName: string;
    categorys: string[] | undefined;
    categoryGenre: string[] ;
  };
  userSelectedCategory: string;
  userSelectedCategoryGenre: string;
};