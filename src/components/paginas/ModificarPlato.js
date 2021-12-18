import React, { useContext, useState } from 'react';


import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FirebaseContext } from '../../firebase/index';

import FileUploader from 'react-firebase-file-uploader'

const ModificarPlato = ({setModificar, modificar, idModificar, infoModificar}) =>{

    const {nombre, precio, categoria, descripcion, image, existencia, id } = infoModificar.plato; 


    // states para las imagenes

    const [subiendo, setSubiendo] = useState(false)

    const [progreso, setProgreso] = useState(0)

    const [urlimagen, setUrlimagen] = useState(image)

    // context con las operaciones de firebase

    const {firebase} = useContext(FirebaseContext)

    // validacion y leer datos de formulario

    const formik = useFormik({
        initialValues:{
            nombre:nombre,
            precio: precio,
            categoria:categoria,
            descripcion: descripcion,
        },


        validationSchema: Yup.object({
            nombre: Yup.string()
                    .min(3, 'Los nombres deben tener al menos 3 caracteres')
                    .required('El nombre es obligatorio'),

            
            precio: Yup.number()
            .min(1, 'Debes ingresar un numero')
            .required('El precio es obligatorio'),

            
            categoria: Yup.string()
            .min(3, 'Los nombres deben tener al menos 3 caracteres')
                    .required('La categoría es obligatoria'),

            
            descripcion: Yup.string()
            .min(10, 'La descripción debe tener al menos 10 caracteres')
            .required('La descripción es obligatoria'),
        }),

        onSubmit: plato =>{

            // evita ejecutarse mientras se está cragando la imagen
            if (!subiendo){
            try {
                plato.existencia= existencia;
                plato.image = urlimagen;
                firebase.db.collection('productos').doc(id).update(plato)
                               
            } catch (error) {
                console.log(error)
            } 

           setModificar(!modificar)}
        }

    })

    

// Todo sobre las imagenes

const handleUploadStart = () =>{
    setProgreso(0)
    setSubiendo(true)
}

const handleUploadError= error =>{
    setSubiendo(false)
    console.log(error)
}

const handleUploadSuccess = async nombre =>{
    setProgreso(100)
    setSubiendo(false)

    const url = await firebase
                .storage
                .ref('productos')
                .child(nombre)
                .getDownloadURL()

    setUrlimagen(url)

}
       

    return(
        <>
        
        <h1 className="text-3xl font-light mb-4 w-full text-center"> Modificar Plato </h1>

        <div className="flex justify-center mt-10">

            <div className=" w-full max-w-xl">
                <form
                onSubmit={formik.handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre del plato</label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />

                    </div>

                    {formik.touched.nombre && formik.errors.nombre ? (
                        <div className="mb-5 text-sm bg-red-100 border-l-4 border-red-500 text-red-700 p-2" role="alert">
                           <p className="font-bold"> Hubo un error: </p>
                            <p>{formik.errors.nombre}</p>
                        </div>
                    ) : null}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="precio"
                        type="number"
                        placeholder="20"
                        min="0"
                        value={formik.values.precio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />

                    </div>

                    {formik.touched.precio && formik.errors.precio ? (
                        <div className="mb-5 text-sm bg-red-100 border-l-4 border-red-500 text-red-700 p-2" role="alert">
                           <p className="font-bold"> Hubo un error: </p>
                            <p>{formik.errors.precio}</p>
                        </div>
                    ) : null}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>

                        <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="categoria"
                        name="categoria"
                        value={formik.values.categoria}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >

                            <option value=""> Seleccione </option>
                            <option value="desayuno"> Desayuno </option>
                            <option value="almuerzo"> Almuerzo </option>
                            <option value="cena"> Cena </option>
                            <option value="bebida"> Bebidas </option>
                            <option value="postre"> Postre </option>
                            <option value="ensalada"> Ensalada </option>

                        </select>

                    </div>

                    {formik.touched.categoria && formik.errors.categoria ? (
                        <div className="mb-5 text-sm bg-red-100 border-l-4 border-red-500 text-red-700 p-2" role="alert">
                           <p className="font-bold"> Hubo un error: </p>
                            <p>{formik.errors.categoria}</p>
                        </div>
                    ) : null}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>

                        <FileUploader
                        accept="image/*"
                        id='imagen'
                        name='imagen'
                        randomizeFilename
                        storageRef = {firebase.storage.ref('productos')}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}                       
                        />

                    </div>

                    {progreso===100 ? (
                        <div className="mb-5 text-sm bg-green-100 border-l-4 border-green-500 text-green-700 p-2" role="alert">
                           <p className="font-bold"> La imagen se subió correctamente</p>
                        </div>
                    ) : null}

                    {subiendo ? (
                        <div className="mb-5 text-sm bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2" role="alert">
                           <p className="font-bold"> Cargando imagen ...</p>
                        </div>
                    ) : null} 


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripción del plato</label>

                        <textarea className="h-30 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:shadow-none"
                        id="descripcion"
                        type="text"
                        placeholder="Descripción"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >
                        </textarea>

                    </div>

                    {formik.touched.descripcion && formik.errors.descripcion ? (
                        <div className="mb-5 text-sm bg-red-100 border-l-4 border-red-500 text-red-700 p-2" role="alert">
                           <p className="font-bold"> Hubo un error: </p>
                            <p>{formik.errors.descripcion}</p>
                        </div>
                    ) : null}


                    <input 
                    type="submit"
                    className=" bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 hover:text-yellow-500"
                    value="modificar plato"/>

                    <button 
                    
                    className=" bg-red-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 hover:text-yellow-500"
                    onClick={()=>setModificar(!modificar)}
                    > cancelar </button>
                    

                </form>
            </div>
        </div>

        </>
    );

};

export default ModificarPlato;