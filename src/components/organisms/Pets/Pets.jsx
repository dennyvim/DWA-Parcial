import React, { useContext, useState } from "react";
import "./Pets.css"
import Add from "../../atoms/Add";
import Form from "../Forms/Form";
import { PetsContext } from "../../../providers/PetsProvider";

const Pets = () => {

    const { pets } = useContext(PetsContext)
    const [showForm, setShowForm] = useState(false);

    return <>
        <ul className="pet__container">
            {pets.map((pet, index)=>
            <li key={index} className="pet__item"> nombre: {pet.nombre} <br/> sexo: {pet.sexo} <br/> edad:{pet.edad} <br/> tipo: {pet.tipoDeMascota} <br/> servicio: {pet.servicio}
            </li>)}
        </ul>
        <div className="add">
            <Add execute={()=>setShowForm(true)} />
        </div>
        {showForm && <Form hide={()=>setShowForm(false)} />}
    </>
}

export default Pets;