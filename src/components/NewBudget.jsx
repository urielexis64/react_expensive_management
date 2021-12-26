import React from "react";

const NewBudget = ({presupuesto, setPresupuesto}) => {
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario'>
				<div className='campo'>
					<label htmlFor='presupuesto'>Presupuesto</label>
					<input
						type='number'
						id='presupuesto'
						className='nuevo-presupuesto'
						placeholder='Agrega tu presupuesto'
						value={presupuesto}
						onChange={(e) => setPresupuesto(e.target.value)}
					/>

					<input type='submit' className='boton' value='Agregar' />
				</div>
			</form>
		</div>
	);
};

export default NewBudget;
