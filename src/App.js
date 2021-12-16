import React from 'react';
import { Routes, Route} from 'react-router';

import Ordenes from "./components/paginas/Ordenes"
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";

import Sidebar from './components/ui/Sidebar'

function App() {
  return (
    
    <div className="md:flex">

      <Sidebar className="" />

      <div className="md:w-3/5 xl:w-4/5 p-6">

      <Routes>
        <Route exact strict path='/' element={<Ordenes/>}/>
        <Route exact strict path='/menu' element={<Menu/>}/>
        <Route exact strict path='/nuevo-platillo' element={<NuevoPlatillo/>}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
