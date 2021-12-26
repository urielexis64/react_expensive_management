import {useState} from "react";
import Message from "./Message";

const NewBudget = ({presupuesto, setPresupuesto, setIsValidBudget}) => {
	const [message, setMessage] = useState("");

	const handleBudget = (e) => {
		e.preventDefault();
		if (!presupuesto || presupuesto <= 0) {
			setMessage("Is not a valid budget");
			return;
		}
		setIsValidBudget(true);
		setMessage("");
	};

	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario' onSubmit={handleBudget}>
				<div className='campo'>
					<label htmlFor='presupuesto'>Budget</label>
					<input
						type='number'
						id='presupuesto'
						className='nuevo-presupuesto'
						placeholder='Agrega tu presupuesto'
						value={presupuesto}
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>

					<input type='submit' className='boton' value='Agregar' />
					{message && <Message tipo='error' children={message} />}
				</div>
			</form>
		</div>
	);
};

export default NewBudget;
