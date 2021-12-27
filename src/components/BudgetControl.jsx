import {useState, useEffect} from "react";
import {formatAmount} from "../helpers";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({budget, expenses}) => {
	const [percentage, setPercentage] = useState(0);
	const [available, setAvailable] = useState(0);
	const [spent, setSpent] = useState(0);

	useEffect(() => {
		const spentAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
		const availableAmount = budget - spentAmount;

		const newPercentage = (((budget - availableAmount) / budget) * 100).toFixed(2);

		setSpent(spentAmount);
		setAvailable(availableAmount);
		setTimeout(() => {
			setPercentage(newPercentage);
		}, 500);
	}, [expenses]);

	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: "#3b82f6",
						textColor: "#3b82f6",
						trailColor: "#f5f5f5",
					})}
					value={percentage}
					text={`${percentage}% spent`}
				/>
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
