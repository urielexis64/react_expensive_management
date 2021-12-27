import {useState} from "react";
import Message from "./Message";

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {
	const [message, setMessage] = useState("");

	const handleBudget = (e) => {
		e.preventDefault();
		if (!budget || budget <= 0) {
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
					<label htmlFor='budget'>Budget</label>
					<input
						type='number'
						id='budget'
						className='nuevo-presupuesto'
						placeholder='Add your budget'
						value={budget}
						onChange={(e) => setBudget(Number(e.target.value))}
					/>

					<input type='submit' className='boton' value='Add' />
					{message && <Message tipo='error' children={message} />}
				</div>
			</form>
		</div>
	);
};

export default NewBudget;
