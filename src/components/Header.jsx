import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget, expenses}) => {
	return (
		<header>
			<h1>Expense Planner</h1>
			{isValidBudget ? (
				<BudgetControl budget={budget} expenses={expenses} />
			) : (
				<NewBudget
					budget={budget}
					setBudget={setBudget}
					setIsValidBudget={setIsValidBudget}
				/>
			)}
		</header>
	);
};

export default Header;
