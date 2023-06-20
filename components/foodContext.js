import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export const FoodsContext = createContext({})

export function FoodsContextProvider({children}) {
    const [selectedFoods, setSelectedFoods] = useLocalStorageState('basket', {defaultValue:[]})
    return (
        <FoodsContext.Provider value={{selectedFoods, setSelectedFoods}} >{children}</FoodsContext.Provider>
    )
}