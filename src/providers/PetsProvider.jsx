import React, { createContext, useState, useEffect } from "react";

export const PetsContext = createContext();

const PetsProvider = ({ children }) => {

    const [pets, setPets] = useState([])

    useEffect(()=>{
        let localPets = [];
        for(let i=0; i<localStorage.length; i++) {
            localPets = [...localPets, JSON.parse(localStorage.getItem(i))]
            if(i == localStorage.length - 1) {
                setPets([...localPets])
            }
        }
    }, [])

    return <PetsContext.Provider
        value={{
            pets,
            setPets
        }}
    >
        {children}
    </PetsContext.Provider>
}

export default PetsProvider;