import React from "react";
import NewBudget from "./NewBudget";

const Header = ({presupuesto, setPresupuesto, isValidBudget, setIsValidBudget}) => {
	return (
		<header>
			<h1>Expense Planner</h1>
			{isValidBudget ? (
				<>Control pre</>
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
