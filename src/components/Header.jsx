import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({presupuesto, setPresupuesto, isValidBudget, setIsValidBudget}) => {
	return (
		<header>
			<h1>Expense Planner</h1>
			{isValidBudget ? (
				<BudgetControl presupuesto={presupuesto} />
			) : (
				<NewBudget
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidBudget={setIsValidBudget}
				/>
			)}
		</header>
	);
};

export default Header;
