import {useState} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./img/nuevo-gasto.svg";

function App() {
	const [budget, setBudget] = useState(0);
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
		setAnimateModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
		setExpenses((prevExpenses) => [...prevExpenses, expense]);
	};

	return (
		<div className={modal ? "fijar" : ""}>
			<Header
				expenses={expenses}
				budget={budget}
				setBudget={setBudget}
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
