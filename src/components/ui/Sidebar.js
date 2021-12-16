import React from 'react';
import { NavLink} from 'react-router-dom';

import "../../css/styles.css";


const  Sidebar = () => {
    return ( 
       <div className="bg-gray-800 md:w-2/5 xl:w-1/5 min-h-screen">
           <div className="p-6">
                <p className="text-center text-2xl text-white uppercase font-bold tracking-wide">restaurantapp</p>
                <p className="text-slate-400 mt-3 text-left " >Administra tu Restaurant en las siguientes opciones</p>

                <nav className="mt-10">

                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" end to="/">Ordenes</NavLink>

                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" end to="/menu">Menu</NavLink>

                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" end to='/nuevo-platillo'>Nuevo Platillo</NavLink>
                </nav>
           
           </div>
       </div>
     );
}
 
export default Sidebar ;