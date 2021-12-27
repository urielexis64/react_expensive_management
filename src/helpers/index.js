export const generateId = () => {
	const random = Math.random().toString(36).substring(2);
	const date = Date.now().toString(36);
	return random + date;
};

export const formatDate = (date) => {
	const newDate = new Date(date);
	const options = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};

	return newDate.toLocaleDateString("es-ES", options);
};

export const formatAmount = (amount) => {
	return amount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};
