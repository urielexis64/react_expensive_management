import Close from "../img/cerrar.svg";

const Modal = ({setModal}) => {
	const handleCloseModal = () => {
		setModal(false);
	};

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={Close} alt='Cerrar' onClick={handleCloseModal} />
			</div>
		</div>
	);
};

export default Modal;
