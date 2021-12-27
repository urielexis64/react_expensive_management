import React from "react";
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

const Expense = ({expense}) => {
	const {category, name, amount, id, date} = expense;

	return (
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
	);
};

export default Expense;
