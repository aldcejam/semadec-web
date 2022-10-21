import { useState } from "react";

export type dataForResearchGameProps = {
  sport: {
    sportName: string;
    categorys: string[] | undefined;
    categoryGenre: string[] ;
  };
  userSelectedCategory: string;
  userSelectedCategoryGenre: string;
};