import React from 'react';


const NuevoPlatillo = () =>{

    return(
        <>
        
        <h1 className="text-3xl font-light mb-4"> NuevoPlatillo </h1>

        <div className="flex justify-center mt-10">

            <div className=" w-full max-w-xl">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre del plato</label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"/>

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="precio"
                        type="number"
                        placeholder="20"
                        min="0"/>

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>

                        <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="categoria"
                        name="categoria">

                            <option value="seleccione"> Seleccione </option>
                            <option value="desayuno"> Desayuno </option>
                            <option value="almuerzo"> Almuerzo </option>
                            <option value="cena"> Cena </option>
                            <option value="bebida"> Bebidas </option>
                            <option value="postre"> Postre </option>
                            <option value="ensalada"> Ensalada </option>

                        </select>

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none h-10 "
                        id="imagen"
                        type="file"
                       />

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripción</label>

                        <textarea className="h-30 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="descripcion"
                        type="text"
                        placeholder="Descripción">
                        </textarea>

                    </div>

                    <input 
                    type="submit"
                    className=" bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 hover:text-yellow-500"
                    value="agregar plato"/>
                    

                </form>
            </div>
        </div>

        </>
    );

};

export default NuevoPlatillo;