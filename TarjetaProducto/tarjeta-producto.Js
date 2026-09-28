class TarjetaProducto extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {

        const imagen = this.getAttribute("imagen");
        const titulo = this.getAttribute("titulo");
        const descripcion = this.getAttribute("descripcion");
        const precio = this.getAttribute("precio");

        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta {
                    background: white;
                    border-radius: 12px;
                    padding: 15px;
                    width: 280px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                }

                img {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                h2 {
                    font-size: 20px;
                }

                p {
                    color: #555;
                }

                .precio {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 15px 0;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
            </style>

            <article class="tarjeta">

                <img src="${imagen}" alt="${titulo}">

                <h2>${titulo}</h2>

                <p>${descripcion}</p>

                <div class="precio">${precio}</div>

                <button id="btn-carrito">
                    Agregar al carrito
                </button>

            </article>
        `;

        const boton = this.shadowRoot.querySelector("#btn-carrito");

        boton.addEventListener("click", () => {

            this.dispatchEvent(
                new CustomEvent("agregar-carrito", {
                    detail: {
                        titulo: titulo,
                        precio: precio
                    },
                    bubbles: true
                })
            );

            alert(titulo + " fue agregado al carrito");
        });
    }
}

customElements.define("tarjeta-producto", TarjetaProducto);