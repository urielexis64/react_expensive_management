import {useState} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modal, setModal] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const [expenses, setExpenses] = useState([]);

	const handleNewExpense = () => {
		setModal(true);

		setTimeout(() => {
			setAnimateModal(true);
		}, 300);
	};

	const saveExpense = (expense) => {
		setExpenses((prevExpenses) => [...prevExpenses, expense]);

		setAnimateModal(false);

		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	return (
		<div className={modal && "fijar"}>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>
			{isValidBudget && (
				<>
					<main>
						<ExpenseList expenses={expenses} />
					</main>
					<div className='nuevo-gasto'>
						<img src={NewExpense} alt='Nuevo gasto' onClick={handleNewExpense} />
					</div>
				</>
			)}
			{modal && (
				<Modal
					animateModal={animateModal}
					setAnimateModal={setAnimateModal}
					setModal={setModal}
					saveExpense={saveExpense}
				/>
			)}
		</div>
	);
}

export default App;
