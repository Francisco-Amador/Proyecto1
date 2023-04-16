import Patient from "./Patient"

function PatientsList({pacientes , setPaciente, eliminarPaciente}) {

  return (
    
    <div className="lg:w-3/5 md:w-1/2  sm:w-full ">


      {pacientes && pacientes.length? (
        <>
          <h2 className=" font-black text-xl mx-auto text-center w-1/2 md:text-2xl  lg:text-3xl">
            Lista Pacientes
          </h2>
          <p className="font-bold mt-5 text-center mb-10 ">
            Administrar tus {" "}
            <span className="text-indigo-600 font-bold text-lg ">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll ">
            {
              pacientes.map( paciente => (
                <Patient
                paciente = {paciente}
                key={paciente.id}
                setPaciente= {setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
              ))
            }
            </div>
        </>
      ): 
     ( <>
          <h2 className=" font-black text-xl mx-auto text-center w-1/2 md:text-2xl  lg:text-3xl">
            No Hay Pacientes
          </h2>
          <p className="font-bold mt-5 text-center mb-10 ">
            Comienza agregando pacientes y {" "}
            <span className="text-red-600 font-bold text-lg "> se deplegaran aquí</span>

          </p>
      </>)
      }



    </div>
  )
}

export default PatientsList
