import React from 'react'

const Form = ({persona,setpersona}) => {

    const handleChage = p => {
        setpersona({
            ...persona,
            [p.target.name]: p.target.value
        })
    }

    let {Nombre,Apellido,Telefono} = persona

    const handleSubmit = () => {

        Telefono = parseInt(Telefono,10)
        if(Nombre === '' || Apellido === '' || Telefono <= 0){
            alert("Los campos no puede estar vacios")
            return
        }
        //hacer la peticion post
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(persona)
        }

        fetch('http://localhost:8080/api/persona',requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        //limpiando los campos
        setpersona({
            Nombre: '',
            Apellido: '',
            Telefono: 0
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor='Nombre' className='form-label'>Nombre</label>
                <input value = {Nombre} name ='Nombre' onChange={handleChage} type='text' id='Nombre' className='form-control'/>
            </div>
            <div className="mb-3">
                <label htmlFor='Apellido' className='form-label'>Apellido</label>
                <input value = {Apellido} name ='Apellido' onChange={handleChage} type='text' id='Apellido' className='form-control'/>
            </div>
            <div className="mb-3">
                <label htmlFor='Telefono' className='form-label'>Telefono</label>
                <input value = {Telefono} name ='Telefono' onChange={handleChage} type='number' id='Telefono' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}

export default Form;