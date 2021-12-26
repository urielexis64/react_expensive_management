import {useState} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NewExpense from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modal, setModal] = useState(false);

	const handleNewExpense = () => {
		setModal(true);
	};

	return (
		<div>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>
			{isValidBudget && (
				<div className='nuevo-gasto'>
					<img src={NewExpense} alt='Nuevo gasto' onClick={handleNewExpense} />
				</div>
			)}
			{modal && <Modal setModal={setModal} />}
		</div>
	);
}

export default App;
