// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {

  const input = document.querySelector('#favchap');
  const button = document.querySelector('#addButton');
  const list = document.querySelector('#list');

  // Evento de clic en el botón
  button.addEventListener('click', function () {

    // Verificar que el campo no esté vacío
    if (input.value.trim() !== '') {

      // Crear elementos
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');

      // Asignar valores
      li.textContent = input.value;
      deleteButton.textContent = '❌';
      deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

      // Agregar botón al li y li a la lista
      li.append(deleteButton);
      list.append(li);

      // Eliminar capítulo cuando se presione ❌
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });

      // Limpiar input y enfocar nuevamente
      input.value = '';
      input.focus();

    } else {
      // Si está vacío, solo enfoca el campo sin hacer nada
      input.focus();
    }
  });
});
