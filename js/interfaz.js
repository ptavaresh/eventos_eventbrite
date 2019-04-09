class Interfaz {
    constructor() {
        //inicializa funcion init al instanciar
        this.init();
        //leer resultado
        this.listado =document.getElementById('resultado-eventos');
    }

    init() {
        //imprimir categorias de la rest API
        this.imprimirCategorias();
    }

    limpiarResultados() {
        const eventosPrevios = document.querySelector('#resultado-eventos');
        eventosPrevios.innerHTML = ''
    }
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                // abreviar toda la ruta en una variable
                const categoriasExtract = categorias.categorias.categories;
                // selecciona el select de categorias para agregar los option ahi
                const selectCategoria = document.getElementById('listado-categorias');
                //recorremos el arreglo e imprimimos los option
                categoriasExtract.forEach(cat => {
                    //creamos el elemento option
                    const option = document.createElement('option');    
                    //se asigna el valor del id
                    option.value = cat.id;
                    //se agrega como hijo al option el nombre de la categoria 
                    option.appendChild(document.createTextNode(cat.name_localized));
                    //se agrega el option creado al selectbox
                    selectCategoria.appendChild(option);        
                });
            })
    }
    //mostrar eventos
    mostrarEventos(eventos) {
        //leer eventos y agregarlos a una variable
        const listaEventos = eventos.events;
        //recorrer los eventos
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
            <div class="col-md-4 mb-4">
                 <div class="card">
                      <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}"> 
                      <div class="card-body">
                           <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>

                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>  
                           </div>
                      </div>

                 </div>
            </div>
       `;
        });
    }

    //metodo para imprimir mensajes, 2 parametros mensaje y clases
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre
        const buscardorDiv = document.querySelector('#buscador');
        buscardorDiv.appendChild(div);
        //quitar el alert despues de 3 segunods
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
            
    }

    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }

    }
}

