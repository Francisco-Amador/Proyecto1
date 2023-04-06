import Header from "./components/Header2"
import Forms from "./components/Forms"
import PatientsList from "./components/patientsList"

function App() {
	return (
		<div className="mt-10 mx-auto">
			<Header/>

			<div className="mt-12 mx-10 md:flex">
				<Forms/>
				<PatientsList/>
			</div>

		</div>
	)
}

export default App
