var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from './components/tarjeta/tarjeta.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            this.render(characters);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const compts = characters.map(({ id, image, gender, status, name }) => `
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
