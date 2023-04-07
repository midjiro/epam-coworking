let button = document.getElementsByClassName('navbar__toggle')[0];

function getMenu(button) {
	let identifier = button.getAttribute('aria-controls');
	if (!identifier) {
		throw new Error('No target specified for menu button.');
		return;
	}

	let menu = document.getElementById(identifier);
	return menu;
}

function isExpanded(button) {
	let isExpanded = button.getAttribute('aria-expanded');
	return isExpanded;
}

function toggleMenuVisibility(button, menu) {
	if (!menu) {
		throw new Error('No menu element provided.');
		return;
	}

	let expanded = isExpanded(button);
	if (expanded === 'false') {
		button.setAttribute('aria-expanded', 'true');
	} else {
		button.setAttribute('aria-expanded', 'false');
	}
}

button.addEventListener('click', (e) => {
	let menu = getMenu(e.currentTarget);
	toggleMenuVisibility(button, menu);
});

window.addEventListener('resize', () => {
	let width = window.innerWidth;
	if (width >= 768) {
		if (isExpanded(button) === 'false') {
			button.setAttribute('aria-expanded', 'true');
		}
	}
});

window.addEventListener('load', () => {
	let width = window.innerWidth;
	if (width >= 768) {
		button.setAttribute('aria-expanded', 'true');
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
