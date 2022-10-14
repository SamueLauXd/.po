import { getCharacters } from './components/tarjeta/tarjeta.js';
import { Personaje } from './dataApi.js';

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<Personaje>) {
        if (!this.shadowRoot) return;

        const compts = characters.map(({id, image, gender, status, name}) => `
        <link rel="stylesheet" href=" ./app/components/tarjeta/style.css"
        <section>
        <article>
        <div class="contenedor">
            <h3 class="info">${id}: ${name}</h3>
            <h3 class=""gender>${gender}</h3>
            <h3 class="status">${status}</h3>
            <image class="image" src="${image}"
        </div>
        </article>
        </section>
        `);

        this.shadowRoot.innerHTML = `
        <section>
        ${compts.join('')}
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer);
