import React from "react";
import NewBudget from "./NewBudget";

const Header = ({presupuesto, setPresupuesto}) => {
	return (
		<header>
			<h1>Expense Planner</h1>
			<NewBudget presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
		</header>
	);
};

export default Header;
