import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () =>{

    return(
        <>
        
        <h1 className="text-3xl font-light mb-4"> Menu </h1>
        <Link to='/nuevo-platillo' className=" bg-blue-900 hover:bg-blue-800 inline-block mb-5 p-2 text-white uppercase font-bold"> Agregar Plato </Link>

        </>
    );

};

export default Menu;