import {useState, useEffect} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./img/nuevo-gasto.svg";
import {generateId} from "./helpers";

function App() {
	const [expenses, setExpenses] = useState([]);

	const [budget, setBudget] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modal, setModal] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const [editExpense, setEditExpense] = useState({});

	useEffect(() => {
		if (editExpense.id) {
			setModal(true);
			setTimeout(() => {
				setAnimateModal(true);
			}, 300);
		}
	}, [editExpense]);

	const handleNewExpense = () => {
		setModal(true);
		setEditExpense({});

		setTimeout(() => {
			setAnimateModal(true);
		}, 300);
	};

	const handleRemoveExpense = (id) => {
		const updatedExpenses = expenses.filter((expense) => expense.id !== id);
		setExpenses(updatedExpenses);
	};

	const saveExpense = (expense) => {
		if (expense.id) {
			const updatedExpenses = expenses.map((expenseState) =>
				expenseState.id === expense.id ? expense : expenseState
			);
			setExpenses(updatedExpenses);
			setEditExpense({});
		} else {
			expense.id = generateId();
			expense.date = Date.now();
			setExpenses((prevExpenses) => [...prevExpenses, expense]);
		}

		setAnimateModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
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
						<ExpenseList
							expenses={expenses}
							setEditExpense={setEditExpense}
							handleRemoveExpense={handleRemoveExpense}
						/>
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
					editExpense={editExpense}
					setEditExpense={setEditExpense}
				/>
			)}
		</div>
	);
}

export default App;
