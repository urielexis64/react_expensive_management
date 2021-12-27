import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import {formatDate} from "../helpers";

import SalaryIcon from "../img/icono_ahorro.svg";
import FoodIcon from "../img/icono_comida.svg";
import RentIcon from "../img/icono_casa.svg";
import ExpensesIon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubscriptionsIcon from "../img/icono_suscripciones.svg";

const iconsDictionary = {
	salary: SalaryIcon,
	food: FoodIcon,
	rent: RentIcon,
	misc: ExpensesIon,
	leisure: LeisureIcon,
	health: HealthIcon,
	subscriptions: SubscriptionsIcon,
};

const Expense = ({expense, setEditExpense, handleRemoveExpense}) => {
	const {category, name, amount, date} = expense;

	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
		</LeadingActions>
	);

	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction destructive onClick={() => handleRemoveExpense(expense.id)}>
				Delete
			</SwipeAction>
		</TrailingActions>
	);

	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}>
				<div className='gasto sombra'>
					<div className='contenido-gasto'>
						<img src={iconsDictionary[category]} alt={category} />
						<div className='descripcion-gasto'>
							<p className='categoria'>{category}</p>
							<p className='nombre-gasto'>{name}</p>
							<p className='fecha-gasto'>
								Agregado el <span>{formatDate(date)}</span>
							</p>
						</div>
					</div>
					<p className='cantidad-gasto'>${amount}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	);
};

export default Expense;
