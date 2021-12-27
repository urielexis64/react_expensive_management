import {useState, useEffect} from "react";

const Filters = ({filter, setFilter}) => {
	return (
		<div className='filtros sombra contenedor'>
			<form>
				<div className='campo'>
					<label>Filter expenses</label>
					<select
						name='filter'
						value={filter}
						onChange={(e) => setFilter(e.target.value)}>
						<option value='default'>All</option>
						<option value='salary'>Salary</option>
						<option value='food'>Food</option>
						<option value='rent'>Rent</option>
						<option value='misc'>Miscellaneous</option>
						<option value='leisure'>Leisure</option>
						<option value='health'>Health</option>
						<option value='subscriptions'>Subscriptions</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filters;
