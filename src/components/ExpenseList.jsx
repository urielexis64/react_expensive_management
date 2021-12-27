import Expense from "./Expense";

const ExpenseList = ({expenses}) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{expenses.length ? "Expenses" : "There is no expenses yet"}</h2>
			{expenses.map((expense) => (
				<Expense key={expense.id} expense={expense} />
			))}
		</div>
	);
};

export default ExpenseList;
