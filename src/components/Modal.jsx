import {useEffect, useState} from "react";
import Message from "./Message";
import Close from "../img/cerrar.svg";

const Modal = ({
	setModal,
	animateModal,
	setAnimateModal,
	saveExpense,
	editExpense,
	setEditExpense,
}) => {
	const [message, setMessage] = useState("");

	const [name, setName] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [date, setDate] = useState();
	const [id, setId] = useState("");

	const handleCloseModal = () => {
		setAnimateModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
		setEditExpense({});
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
		};

		setMessage("");
		saveExpense(expense);
	};

	useEffect(() => {
		if (editExpense.id) {
			setName(editExpense.name);
			setAmount(editExpense.amount);
			setCategory(editExpense.category);
			setDate(editExpense.date);
			setId(editExpense.id);
		}
	}, []);

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={Close} alt='Cerrar' onClick={handleCloseModal} />
			</div>
			<form
				onSubmit={handleSubmit}
				className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
				<legend>{editExpense.id ? "Edit expense" : "New Expense"}</legend>

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

				<input
					type='submit'
					className='btn'
					value={editExpense.id ? "Save changes" : "Add Expense"}
				/>
			</form>
		</div>
	);
};

export default Modal;
