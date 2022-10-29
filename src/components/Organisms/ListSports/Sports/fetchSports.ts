export type ApiSportsProps = {
  sportName: string;
  categorys: string[] | undefined;
  categoryGenre: string[];
  MinNumberOfTeams: number;
  MaxNumberOfTeams: number | 99;
}

type ArrayApiSportsProps = Array<ApiSportsProps>

export const ApiSports: ArrayApiSportsProps = [
  {
    sportName: "futsal",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },
  {
    sportName: "vôlei",
    categorys: ["areia", "quadra"],
    categoryGenre: ["famale", "male", "mixed"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },
  {
    sportName: "Natação",
    categorys: ["25m", "50m", "revezamento"],
    categoryGenre: ["famale", "male", "mixed"],
    MinNumberOfTeams: 3,
    MaxNumberOfTeams: 99,
  },
  {
    sportName: "basquete",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 99,
  },
  {
    sportName: "xadrex",
    categorys: undefined,
    categoryGenre: ["mixed"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },
  {
    sportName: "Handball",
    categorys: undefined,
    categoryGenre: ["famale", "male"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },
  {
    sportName: "ping pong",
    categorys: undefined,
    categoryGenre: ["mixed"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },
  {
    sportName: "cabo de guerra",
    categorys: undefined,
    categoryGenre: ["mixed"],
    MinNumberOfTeams: 2,
    MaxNumberOfTeams: 2,
  },

];
