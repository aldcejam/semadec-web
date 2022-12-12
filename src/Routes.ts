type RoutesProps = {
    home: string,
    login: string,
    findGame: string,
    gameList: string,
    profile: string
    registerGame: string
}

export const Routes:RoutesProps = {
    home: "/",
    login: "/login",
    findGame: "/game/find",
    gameList: "/game/list",    
    registerGame: "/game/register",
    profile: "/profile"
}