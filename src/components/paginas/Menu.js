import React, {useState, useEffect, useContext, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/index';
import PlatoMenu from '../ui/PlatoMenu';
import ModificarPlato from './ModificarPlato';

//import  Fragment  from 'react';





const Menu = () =>{

    const {firebase} = useContext(FirebaseContext);

    const [platos, setPlatos] = useState([])

    const [modificar, setModificar] = useState(false)

    const [idModificar, setIdModificar] = useState('')

    const [infoModificar, setInfoModificar] = useState({})
    
    useEffect(() => {

       const obtenerPlato = () => {
          firebase.db.collection('productos').onSnapshot(handleSnapshot); 

        }
        obtenerPlato();
    }, []);

// Snapshot permite manejar la base de datos en real time  
  
    const handleSnapshot = (snapshot) =>{
        const platos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        setPlatos(platos)

    }
    

    return(
        <>
        
        
        
        {modificar ? <ModificarPlato
                    setModificar={setModificar}
                    modificar={modificar}
                    idModificar={idModificar}
                    infoModificar={infoModificar}/> :  
         <>
        <h1 className="text-3xl font-light mb-4 text-center "> Menu </h1>
        <Link to='/nuevo-platillo' className=" bg-gray-800 hover:bg-gray-700 hover:text-yellow-500 inline-block mb-5 p-2 text-white uppercase font-bold"> Agregar Plato </Link>

        {platos.map((plato) => {          
           return( <PlatoMenu
            key={plato.id}
            plato={plato}
            setModificar={setModificar}
            modificar={modificar}
            setIdModificar={setIdModificar}
            setInfoModificar={setInfoModificar}/> )
        })} </> } 

       
        
        </>
    );

};

export default Menu;