import {useState} from "react";
import Message from "./Message";
import Close from "../img/cerrar.svg";
import {generateId} from "../helpers";

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense}) => {
	const [message, setMessage] = useState("");

	const [name, setName] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");

	const handleCloseModal = () => {
		setAnimateModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim() === "" || amount <= 0 || category.trim() === "") {
			if (amount <= 0) {
				return setMessage("El monto debe ser mayor a 0");
			}
			return setMessage("Todos los campos son obligatorios");
		}

		const expense = {
			name,
			amount,
			category,
			id: generateId(),
			date: Date.now(),
		};

		setMessage("");
		saveExpense(expense);
	};

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={Close} alt='Cerrar' onClick={handleCloseModal} />
			</div>
			<form
				onSubmit={handleSubmit}
				className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
				<legend>New Expense</legend>

				{message && <Message tipo='error'>{message}</Message>}

				<div className='campo'>
					<label htmlFor='name'>Expense Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						id='name'
						placeholder='Add the Expense Name'
					/>
				</div>
				<div className='campo'>
					<label htmlFor='amount'>Amount</label>
					<input
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
						type='number'
						id='amount'
						placeholder='Add the expense amount e.g. 200'
					/>
				</div>
				<div className='campo'>
					<label htmlFor='amount'>Category</label>
					<select
						id='category'
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value='default'>Select a category</option>
						<option value='salary'>Salary</option>
						<option value='food'>Food</option>
						<option value='rent'>Rent</option>
						<option value='misc'>Miscellaneous</option>
						<option value='leisure'>Leisure</option>
						<option value='health'>Health</option>
						<option value='subscriptions'>Subscriptions</option>
					</select>
				</div>

				<input type='submit' className='btn' value='Add Expense' />
			</form>
		</div>
	);
};

export default Modal;
