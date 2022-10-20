import { useState } from "react";

export type dataForResearchProps = {
  sport: {
    sportName: string;
    categorys: string[] | undefined;
    categoryGenre: string[];
  };
  userSelectedCategory: string;
  userSelectedCategoryGenre: string;
};