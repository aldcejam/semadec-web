export type ApiSportsProps = {
  sportName: string;
  categorys: string[] | undefined;
  categoryGenre: string[];

}

type ArrayApiSportsProps = Array<ApiSportsProps>

export const ApiSports: ArrayApiSportsProps = [
  {
    sportName: "futsal",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
  },
  {
    sportName: "vôlei",
    categorys: ["areia", "quadra"],
    categoryGenre: ["famale", "male", "mixed"],
  },
  {
    sportName: "Natação",
    categorys: ["25m", "50m", "revezamento"],
    categoryGenre: ["famale", "male", "mixed"],
  },
  {
    sportName: "basquete",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
  },
  {
    sportName: "xadrex",
    categorys: undefined,
    categoryGenre: ["mixed"],
  },
  {
    sportName: "Handball",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
  },
  {
    sportName: "ping pong",
    categorys: undefined,
    categoryGenre: ["mixed"],
  },
  {
    sportName: "cabo de guerra",
    categorys: undefined,
    categoryGenre: ["mixed"],
  },
];
