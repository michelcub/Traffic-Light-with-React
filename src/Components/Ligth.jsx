import React from "react"

export const Ligth = ({id, color, handle, selection}) => {
    return (
        <button id={id} key={id} className ={`box-ligth ${color} ${selection == id? 'active-ligth' : ''}`} onClick={handle}></button>
    );
};