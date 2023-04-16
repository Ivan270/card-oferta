let tyc = document.getElementById('tyc');
let submitButton = document.getElementById('submitBtn');
let codDcto = document.getElementById('codDcto');

let obtenerDescuento = () => {
	codDcto.classList.remove('d-none');
};
submitButton.addEventListener('click', () => {
	// 'tyc.checked' Comprueba que checkbox esté marcado
	if (tyc.checked) {
		obtenerDescuento();
	} else {
		// Metodo de Bootstrap para mostrar modal
		myModal.show();
	}
});

// MODAL
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
