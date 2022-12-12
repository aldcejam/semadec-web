type RoutesProps = {
    home: string,
    login: string,
    findGame: string,
    games: string,
    profile: string
    register: string
}

export const Routes:RoutesProps = {
    home: "/",
    login: "/login",
    findGame: "/game/find",
    games: "/game/list",    
    register: "/game/register",
    profile: "/profile"
}