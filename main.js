const navbarBtn = document.querySelector('.navbar__btn');
const navbarMenu = document.querySelector('.navbar__menu');

navbarBtn.addEventListener('click', (e) => {
	navbarMenu.classList.toggle('navbar__menu--active');
	navbarBtn.classList.toggle('navbar__btn--active');
});

window.addEventListener('resize', (e) => {
	const width = window.innerWidth;
	if (width > 768 && navbarMenu.classList.contains('navbar__menu--active')) {
		navbarMenu.classList.remove('navbar__menu--active');
		navbarBtn.classList.remove('navbar__btn--active');
	}
});

function extract_form_data(fields) {
	let data = {};
	fields.forEach((field) => {
		const { name, value } = field;

		if (field.getAttribute('type') == 'radio') {
			if (!field.checked) {
				return;
			}

			data[name] = value;
		}

		if (field.localName == 'input') {
			data[name] = value;
		}
	});

	return data;
}

document.addEventListener('submit', (e) => {
	e.preventDefault();
	const fields = e.target.querySelectorAll('input');

	let data = extract_form_data(fields);

	const message = `Congratulations, ${
		data['full-name']
	}! You have successfully reserved a seat in the ${data['coworking-type']
		.split('-')
		.join(
			' '
		)}. Soon you will receive a letter with the seat number for this phone: ${
		data['phone']
	}.`;

	alert(message);
});
