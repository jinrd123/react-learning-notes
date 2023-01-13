import { createContext } from "react";

const UserContext = createContext({name: "jrd", level: "下等马"});
const ThemeContext = createContext({color: "red", size: "200px"});

export {
    UserContext,
    ThemeContext,
}