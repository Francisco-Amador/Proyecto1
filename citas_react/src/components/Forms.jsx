import { useState, useEffect } from "react";
function Forms() {

  const [nombre, setNombre ] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail ] = useState("")
  const [fecha, setFecha ] = useState("")
  const [sintomas, setSintomas ] = useState("")
  console.log(nombre)
  return ( 

    <div className=" lg:w-2/5 md:w-1/2  sm:w-full">

     <h2 className="font-black text-xl mx-auto text-center  md:text-2xl  lg:text-3xl">Seguimiento Pacientes</h2>
      <p className="font-bold mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold text-lg ">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
      <div className="mt-5">
          <label  htmlFor="mascota" className=" block text-gray-700 uppercase "> Nombre Mascota </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label htmlFor="propietario" className=" block text-gray-700 uppercase "> Nombre de Propietario </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className=" block text-gray-700 uppercase "> Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto de propietario "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label htmlFor="alta" className=" block text-gray-700 uppercase "> Alta</label>
          <input
            id="alta"
            type="date"
            placeholder=" "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label htmlFor="sintomas" className=" block text-gray-700 uppercase "> Sintomas</label>
          <textarea 
            id="sintomas" 
            placeholder=" Describe los sintomas "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          ></textarea>
        </div>
        <input 
        type="submit"
        className="mt-4 bg-indigo-600 w-full p-3 rounded-lg text-white uppercase hover:bg-indigo-800 cursor-pointer"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
}

export default Forms;
