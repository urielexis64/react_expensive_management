import {useState, useEffect} from "react";
import {formatAmount} from "../helpers";

const BudgetControl = ({budget, expenses}) => {
	const [available, setAvailable] = useState(0);
	const [spent, setSpent] = useState(0);

	useEffect(() => {
		const spentAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
		const availableAmount = budget - spentAmount;
		setAvailable(availableAmount);
		setSpent(spentAmount);
	}, [expenses]);

	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<p>grafica</p>
			</div>
			<div className='contenido-presupuesto'>
				<p>
					<span>Budget:</span> {formatAmount(budget)}
				</p>
				<p>
					<span>Available:</span> {formatAmount(available)}
				</p>
				<p>
					<span>Spent:</span> {formatAmount(spent)}
				</p>
			</div>
		</div>
	);
};

export default BudgetControl;
