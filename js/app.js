//instanciar clases
const eventbrite = new EventBrite;
const ui = new Interfaz;

//Listeners
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Leer el text del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //revisar que exista algo escrito en el buscador

    if(textoBuscador !== '') {
        //cuando si hay busqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if(eventos.eventos.events.length > 0) {
                    //si hay eventos, mostrar resultado
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventos.eventos);
                    
                } else {
                    //mostrar alerta
                    ui.mostrarMensaje('No hay resultados,', 'alert alert-danger mt-4')
                }
            })

    } else {
        //mostrar mensaje para imprimir
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');

    }



})