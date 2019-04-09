class EventBrite {
    constructor() {
        this.token_auth = '55XKTUIDIGVNO4WNUQCR';
        this.ordernar = 'date';
    }
    //mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = await fetch
        (`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordernar}&categories=${categoria}&token=${this.token_auth}`);
        //esperar respouesta y obtener json
        const eventos = await respuestaEvento.json();
        //devolbvemos el resultado
        return {
            eventos
        }
    }

    //obtenien las categorias en init
    async obtenerCategorias() {
        //consultar categorias a la API de eventbrite
        const respuestaCategorias = await fetch
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        //esoerar respuesta y devolver el json
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado
        return {
            categorias
        }

    }
} 