
import React, { createContext, useContext, useState } from 'react';

export const carColours = [
    { colour: "#BF9264", name: "brown",},
    { colour: "#6F826A", name: "green",},
    { colour: "#9EC6F3", name: "blue",},
    { colour: "#896599", name: "mauve",},
    { colour: "#ffa500", name: "orange",},
    { colour: "#ffd1dc", name: "pink",},
    { colour: "#222222", name: "black",},
    { colour: "#AF3E3E", name: "red",},
];

const CustomizationContext = createContext();
export const CustomizationProvider = (props) => {

    const [carColour, setCarColours] = useState(carColours[0]);
    
    return (
        <CustomizationContext.Provider
            value={{
                carColours,
                carColour,
                setCarColours,
        }}>
            {props.children}
        </CustomizationContext.Provider>
    )
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};