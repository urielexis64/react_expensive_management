import Expense from "./Expense";

const ExpenseList = ({expenses, setEditExpense, handleRemoveExpense}) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{expenses.length ? "Expenses" : "There is no expenses yet"}</h2>
			{expenses.map((expense) => (
				<Expense
					key={expense.id}
					expense={expense}
					setEditExpense={setEditExpense}
					handleRemoveExpense={handleRemoveExpense}
				/>
			))}
		</div>
	);
};

export default ExpenseList;
