import { createContext, useState } from "react";

export const tokenDataContext = createContext(null)

export default function tokenData(prop) {
    const [tokenData, setTokenData] = useState(null)

    return (
        <tokenDataContext.Provider value={{ tokenData, setTokenData }}>
            {prop.children}
        </tokenDataContext.Provider>
    )
}