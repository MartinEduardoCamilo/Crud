import React from 'react'

const PersonaList = ({personas, persona, setlistPersona}) => {


    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:8080/api/persona/'+id,requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistPersona(true)
    }


    const handleUpdate = id =>{
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(persona)
        }

        fetch('http://localhost:8080/api/persona/'+id,requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistPersona(true)
    }

    return(
        <table className='table'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
            </thead>
            <tbody>
                {personas.map(persona =>(
                    <tr key={persona.Id}>
                      <td>{persona.Id}</td>
                      <td>{persona.Nombre}</td>
                      <td>{persona.Apellido}</td>
                      <td>{persona.Telefono}</td>
                      <div>
                          <div className='mb-3'>
                              <button onClick={()=>handleDelete(persona.Id)} className='btn btn-danger'>Borrar</button>
                              <button onClick={()=>handleUpdate(persona.Id)} className='btn btn-success'>Editar</button>
                          </div>
                      </div>
                  </tr>
                ))}   
            </tbody>
        </table>
    );
}

export default PersonaList