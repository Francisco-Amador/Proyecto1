
const Patient = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente

  const handelEliminar = () => {
    const response = confirm("Desea eliminar el registro?")

    if(response){
     eliminarPaciente(paciente.id)
    }
  }


  return (
    <div className=" mb-5 bg-white shadow-md p-5 rounded-lg md:mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case ">{nombre}</span>

      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case ">{propietario}</span>

      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case ">{email}</span>

      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: <span className="font-normal normal-case ">{fecha}</span>

      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case ">{sintomas}</span>

      </p>
      <div className="flex justify-between mt-5">
        <button className="px-3 py-1 font-bold bg-indigo-600 hover:bg-indigo-800 text-white uppercase rounded-lg"
                type="button"
                onClick={() => setPaciente(paciente)}>
          editar
        </button>

        <button className="px-3 py-1 font-bold bg-red-600 hover:bg-red-800 text-white uppercase rounded-lg"
                 type="button"
                 onClick={handelEliminar }
                 >
          eliminar
        </button>
      </div>
    </div>
  )
}

export default Patient
