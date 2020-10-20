import React, { useContext, useState } from "react";
import "./Pets.css"
import Add from "../../atoms/Add";
import Form from "../Forms/Form";
import { PetsContext } from "../../../providers/PetsProvider";

const Pets = () => {

    const { pets } = useContext(PetsContext)
    const [showForm, setShowForm] = useState(false);

    return <>
        <Add execute={()=>setShowForm(true)} />
        <ul>
            {pets.map((pet, index)=><li key={index}>{pet.nombre}</li>)}
        </ul>
        {showForm && <Form hide={()=>setShowForm(false)} />}
    </>

}

export default Pets;