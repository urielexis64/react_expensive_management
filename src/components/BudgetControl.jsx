import React from "react";

const BudgetControl = ({presupuesto}) => {
	const formatAmount = (amount) => {
		return amount.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<p>grafica</p>
			</div>
			<div className='contenido-presupuesto'>
				<p>
					<span>Budget:</span> {formatAmount(presupuesto)}
				</p>
				<p>
					<span>Available:</span> {formatAmount(0)}
				</p>
				<p>
					<span>Spent:</span> {formatAmount(0)}
				</p>
			</div>
		</div>
	);
};

export default BudgetControl;
