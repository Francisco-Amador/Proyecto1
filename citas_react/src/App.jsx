import Header from "./components/Header2"
import Forms from "./components/Forms"
import PatientsList from "./components/PatientsList"
import { useEffect, useState } from "react"

function App() {


	const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
	const [paciente, setPaciente] = useState({})
	


	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify( pacientes ));
	  }, [pacientes])


	const eliminarPaciente = (id) => {
		const newPasient = pacientes.filter( paci => paci.id !== id )
		setPacientes(newPasient)
	}

	return (
		<div className="mt-10 mx-auto">
			<Header/>

			<div className="mt-12 mx-10 md:flex">
				<Forms 
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente= {paciente}
					setPaciente ={setPaciente}
				/>
				<PatientsList
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>

		</div>
	)
}

export default App
