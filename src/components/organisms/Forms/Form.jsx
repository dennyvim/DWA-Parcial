import React, { useState, useContext } from 'react';
import "./Forms.css";
import { PetsContext } from "../../../providers/PetsProvider";

export default function Form({ hide }){

    const { pets, setPets } = useContext(PetsContext);

    const [data, setData] = useState({
        nombre: '',
        sexo: 'Macho',
        edad: 0,
        tipoDeMascota: 'Perro',
        servicio: 'Valoración'

    })

    const handleEvent = (event) =>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem(pets.length, JSON.stringify(data))
        setPets([...pets, data])
        hide()
    }
    return(
        <div className="form__container">
            <h1>Agrega una mascota</h1>
            <form className="AddPet__Form" onSubmit={handleSubmit}>
                <label htmlFor ="nombre">Nombre</label>
                <input type="text"  id= "nombre"name="nombre" onChange={handleEvent} required></input>

                <label htmlFor ="edad">Edad</label>
                <input type="text"  id= "edad" name="edad" onChange={handleEvent} required></input>

                <label htmlFor ="sexo">Sexo</label>
                <select id="sexo" name="sexo" onChange={handleEvent} required>
                    <option defaultValue>Macho</option>
                    <option>Hembra</option>
                </select>

                <label htmlFor ="tipoDeMascota">Tipo de mascota</label>
                <select id="tipoDeMascota" name="tipoDeMascota" onChange={handleEvent} required>
                    <option defaultValue>Perro</option>
                    <option>Gato</option>
                    <option>Hámster</option>
                    <option>Ave</option>
                </select>

                <label htmlFor ="servicio">Servicio</label>
                <select id="servicio" name="servicio" onChange={handleEvent} required>
                    <option defaultValue>Valoración</option>
                    <option>Urgencias</option>
                    <option>Hospitalización</option>
                </select>
                <button type="submit">Enviar</button>
                <button type="button" onClick={()=>hide()}>Ocultar</button>
            </form>
        </div>
    );
}