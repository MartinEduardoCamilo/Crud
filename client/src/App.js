import React, {Fragment,useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import PersonaList from './components/PersonaList';
import Form from './components/Form';
function App() {

  const [personas, setpersonas] = useState([]);
  const [listPersona, setlistPersona] = useState(false);

  useEffect(() => {
      const getPersona = () =>{
        fetch('http://localhost:8080/api/persona')
        .then(res => res.json())
        .then(res => setpersonas(res))
      }
      getPersona()
      setlistPersona(false)
    }, [listPersona])

    const [persona, setpersona] = useState({
      Nombre: '',
      Apellido: '',
      Telefono: 0
    })

  return (
   <Fragment>
     <Navbar brand= 'CRUD'/>
     <div className='container'>
        <div className='row'>
            <div className='col-7'>
                <h2 style={{textAlign: 'center'}}>Lista de persona</h2>
                <PersonaList  persona = {persona} personas = {personas} listPersona = {listPersona} setlistPersona = {setlistPersona} />
            </div>
            <div className='col-5'>
                <h2 style={{textAlign: 'center'}}>Formulario de personas</h2>
                <Form persona = {persona} setpersona = {setpersona} />
            </div>
        </div>
     </div>
   </Fragment>
  );
}

export default App;
