import { createContext, useState } from "react";

export const FoodsContext = createContext({})

export function FoodsContextProvider({children}) {
    const [selectedFoods, setSelecedFoods] = useState([])
    return (
        <FoodsContext.Provider value={{selectedFoods}} >{children}</FoodsContext.Provider>
    )
}