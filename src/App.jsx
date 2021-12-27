import {useState, useEffect} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Filters from "./components/Filters";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./img/nuevo-gasto.svg";
import {generateId} from "./helpers";

function App() {
	const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) ?? []);

	const [budget, setBudget] = useState(Number(localStorage.getItem("budget")) ?? 0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modal, setModal] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const [editExpense, setEditExpense] = useState({});

	const [filter, setFilter] = useState("default");
	const [filteredExpenses, setFilteredExpenses] = useState([]);

	useEffect(() => {
		setIsValidBudget(budget > 0);
	}, []);

	useEffect(() => {
		localStorage.setItem("budget", budget ?? 0);
	}, [budget]);

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	useEffect(() => {
		if (editExpense.id) {
			setModal(true);
			setTimeout(() => {
				setAnimateModal(true);
			}, 300);
		}
	}, [editExpense]);

	useEffect(() => {
		const filteredExpenses = expenses.filter((expense) => expense.category === filter);

		setFilteredExpenses(filteredExpenses);
	}, [filter]);

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
				setExpenses={setExpenses}
				budget={budget}
				setBudget={setBudget}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>
			{isValidBudget && (
				<>
					<main>
						<Filters filter={filter} setFilter={setFilter} />

						<ExpenseList
							expenses={filter === "default" ? expenses : filteredExpenses}
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
