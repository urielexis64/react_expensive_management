import {useState} from "react";
import Header from "./components/Header";
import NewExpense from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

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
					<img src={NewExpense} alt='Nuevo gasto' />
				</div>
			)}
		</div>
	);
}

export default App;
